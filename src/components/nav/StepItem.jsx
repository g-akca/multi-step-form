function StepItem({ number, title, isCurrent }) {
  return (
    <div className="contents tablet:flex tablet:gap-4 tablet:items-center">
      <div className={`rounded-full w-8.25 aspect-square flex justify-center items-center text-[14px] leading-[120%] tracking-[-1px] font-bold border transition-all ${isCurrent ? "bg-blue-200 border-blue-200 text-blue-950" : "text-white border-white"}`}>
        {number}
      </div>

      <div className="hidden tablet:flex tablet:flex-col tablet:uppercase">
        <p className="text-blue-300 text-[12px] leading-[130%]">Step {number}</p>
        <p className="text-white text-[14px] leading-[120%] font-bold tracking-[1px]">{title}</p>
      </div>
    </div>
  )
}

export default StepItem;