import PersonalInfoStep from "../steps/PersonalInfoStep";
import PlanSelectionStep from "../steps/PlanSelectionStep";
import AddOnsStep from "../steps/AddOnsStep";
import SummaryStep from "../steps/SummaryStep";
import ConfirmationStep from "../steps/ConfirmationStep";

const stepNames = {
  1: "Personal info",
  2: "Select your plan",
  3: "Pick add-ons",
  4: "Finishing up",
  5: "Thank you"
}

function FormSection({ currentStep, goToStep2 }) {
  const steps = {
    1: <PersonalInfoStep />,
    2: <PlanSelectionStep />,
    3: <AddOnsStep />,
    4: <SummaryStep goToStep2={goToStep2} />,
    5: <ConfirmationStep />
  }

  return (
    <div 
      className="
        bg-white rounded-[10px] px-6 py-8 flex flex-col gap-6 shadow-[0_25px_40px_rgba(0,0,0,0.095)] 
        tablet:bg-transparent tablet:rounded-none tablet:shadow-none tablet:p-0 tablet:gap-8 desktop:gap-10
      "
    >
      {/* Announces step transitions to screen reader users */}
      <p role="status" aria-live="polite" className="sr-only">
        {stepNames[currentStep] ? `Step ${currentStep}: ${stepNames[currentStep]}` : "An error occurred."}
      </p>
      
      {steps[currentStep] || <p className="py-6 text-center text-red-500 tablet:text-[18px] desktop:text-[20px]">An error occurred.</p>}
    </div>
  )
}

export default FormSection;