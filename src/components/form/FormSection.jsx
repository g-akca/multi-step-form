import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";

function FormSection({ currentStep }) {
  const steps = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
  }

  return (
    <div className="bg-white rounded-[10px] px-6 py-8 flex flex-col gap-6 shadow-[0_25px_40px_rgba(0,0,0,0.095)]">
      {steps[currentStep] || <p className="py-6 text-center text-red-500">An error occurred.</p>}
    </div>
  )
}

export default FormSection;