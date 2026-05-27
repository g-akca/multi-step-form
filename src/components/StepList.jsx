import StepItem from "./StepItem";

const steps = [1, 2, 3, 4];

function StepList({ currentStep }) {
  return (
    <div className="self-center flex gap-4 items-center">
      {steps.map(step => (
        <StepItem
          key={step}
          number={step}
          current={step === currentStep}
        />
      ))}
    </div>
  )
}

export default StepList;