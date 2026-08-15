import PersonalInfoStep from "../steps/PersonalInfoStep";
import PlanSelectionStep from "../steps/PlanSelectionStep";
import AddOnsStep from "../steps/AddOnsStep";
import SummaryStep from "../steps/SummaryStep";
import ConfirmationStep from "../steps/ConfirmationStep";

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
      {steps[currentStep] || <p className="py-6 text-center text-red-500 tablet:text-[18px] desktop:text-[20px]">An error occurred.</p>}
    </div>
  )
}

export default FormSection;