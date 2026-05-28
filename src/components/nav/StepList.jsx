import StepItem from "./StepItem";

const steps = [1, 2, 3, 4];

function StepList({ currentStep }) {
  return (
    <div className="self-center flex gap-4 items-center">
      {steps.map(step => (
        <StepItem
          key={step}
          number={step}
          current={step === currentStep || (step === 4 && currentStep === 5)}
        />
      ))}
    </div>
  )
}

export default StepList;