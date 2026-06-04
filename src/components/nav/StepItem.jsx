function StepItem({ number, title, isCurrent }) {
  return (
    <div className={`rounded-full w-8.25 aspect-square flex justify-center items-center text-[14px] leading-[120%] tracking-[-1px] font-bold ${isCurrent ? "bg-blue-200 text-blue-950" : "text-white border border-white"}`}>
      {number}
    </div>
  )
}

export default StepItem;