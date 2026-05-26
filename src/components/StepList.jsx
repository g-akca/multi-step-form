import StepItem from "./StepItem";

const steps = [
  {
    number: 1,
    current: true
  },
  {
    number: 2
  },
  {
    number: 3
  },
  {
    number: 4
  }
]

function StepList() {
  return (
    <div className="self-center flex gap-4 items-center">
      {steps.map(step => (
        <StepItem
          key={step.number}
          number={step.number}
          current={step.current}
        />
      ))}
    </div>
  )
}

export default StepList;