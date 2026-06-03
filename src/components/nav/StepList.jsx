import StepItem from "./StepItem";

const steps = [1, 2, 3, 4];

function StepList({ currentStep }) {
  return (
    <div className="self-center flex gap-4 items-center tablet:self-stretch tablet:items-stretch tablet:p-4">
      <div className="contents tablet:flex tablet:flex-col tablet:gap-8 tablet:py-10 tablet:px-6 tablet:bg-[url('/images/bg-sidebar-desktop.svg')] tablet:bg-no-repeat tablet:bg-cover tablet:bg-bottom-left tablet:rounded-[10px]">
        {steps.map(step => (
          <StepItem
            key={step}
            number={step}
            current={step === currentStep || (step === 4 && currentStep === 5)}
          />
        ))}
      </div>
    </div>
  )
}

export default StepList;