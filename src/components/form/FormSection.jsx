import Step1 from "../steps/Step1";
import Step2 from "/src/components/steps/Step2";

const steps = {
  1: <Step1 />,
  2: <Step2 />
}

function FormSection({ currentStep }) {
  return (
    <div className="bg-white rounded-[10px] px-6 py-8 flex flex-col gap-6 shadow-[0_25px_40px_rgba(0,0,0,0.095)]">
      {steps[currentStep] || <p className="py-6 text-center text-red-500">An error occurred.</p>}
    </div>
  )
}

export default FormSection;