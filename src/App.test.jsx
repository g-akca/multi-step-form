import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

function renderApp() {
  return render(<App />);
}

function getEnabledNextButton() {
  return screen
    .queryAllByRole("button", { name: "Next Step" })
    .find(button => !button.disabled);
}

function expectStepStatus(step) {
  expect(screen.getAllByRole("status").some(status => status.textContent === step)).toBe(true);
}

describe("multi-step form navigation", () => {
  it("keeps the user on personal info until required fields are valid", async () => {
    const user = userEvent.setup();

    renderApp();
    await user.click(getEnabledNextButton());

    expectStepStatus("Step 1: Personal info");
    await waitFor(() => {
      expect(screen.getAllByText("This field is required")).toHaveLength(3);
    });
  });

  it("keeps the user on personal info when the email address is invalid", async () => {
    const user = userEvent.setup();

    renderApp();
    await user.type(screen.getByLabelText("Name"), "Stephen King");
    await user.type(screen.getByLabelText("Email Address"), "stephenking.example.com");
    await user.type(screen.getByLabelText("Phone Number"), "+1 234 567 890");
    await user.click(getEnabledNextButton());

    expectStepStatus("Step 1: Personal info");
    await waitFor(() => {
      expect(screen.getByText("Enter a valid email address")).toBeInTheDocument();
    });
  });

  it("moves through the form and can return to the previous step", async () => {
    const user = userEvent.setup();

    renderApp();
    await user.type(screen.getByLabelText("Name"), "Stephen King");
    await user.type(screen.getByLabelText("Email Address"), "stephenking@example.com");
    await user.type(screen.getByLabelText("Phone Number"), "+1 234 567 890");
    await user.click(getEnabledNextButton());

    await waitFor(() => {
      expectStepStatus("Step 2: Select your plan");
    });

    await user.click(screen.getByText("Advanced"));
    await user.click(getEnabledNextButton());
    await waitFor(() => {
      expectStepStatus("Step 3: Pick add-ons");
    });

    await user.click(screen.getByText("Online service"));
    await user.click(screen.getByText("Larger storage"));
    await user.click(getEnabledNextButton());
    await waitFor(() => {
      expectStepStatus("Step 4: Finishing up");
    });

    expect(screen.getByText("Advanced (Monthly)")).toBeInTheDocument();
    expect(screen.getByText("$12/mo")).toBeInTheDocument();
    expect(screen.getByText("Online service")).toBeInTheDocument();
    expect(screen.getByText("+$1/mo")).toBeInTheDocument();
    expect(screen.getByText("Larger storage")).toBeInTheDocument();
    expect(screen.getByText("+$2/mo")).toBeInTheDocument();
    expect(screen.getByText("+$15/mo")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Change" }));
    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "Select your plan" })).toHaveFocus();
    });

    await user.click(getEnabledNextButton());
    await waitFor(() => {
      expectStepStatus("Step 3: Pick add-ons");
    });

    await user.click(getEnabledNextButton());
    await waitFor(() => {
      expectStepStatus("Step 4: Finishing up");
    });

    await user.click(screen.getByRole("button", { name: "Go Back" }));
    await waitFor(() => {
      expectStepStatus("Step 3: Pick add-ons");
    });

    expect(screen.getByText("Online service").closest("label").querySelector("input")).toBeChecked();
    expect(screen.getByText("Larger storage").closest("label").querySelector("input")).toBeChecked();

    await user.click(getEnabledNextButton());
    await waitFor(() => {
      expectStepStatus("Step 4: Finishing up");
    });

    await user.click(screen.getByRole("button", { name: "Confirm" }));
    await waitFor(() => {
      expectStepStatus("Step 5: Thank you");
    });

    expect(screen.getByRole("heading", { name: "Thank you!" })).toBeInTheDocument();
  });
});