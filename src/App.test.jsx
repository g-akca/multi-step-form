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
    expect(screen.getAllByText("This field is required")).toHaveLength(3);
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
  });
});