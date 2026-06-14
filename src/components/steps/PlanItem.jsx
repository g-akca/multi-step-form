function PlanItem({ plan, register, monthly }) {
  return (
    <label 
      className="
        h-20 p-4 rounded-lg bg-white border border-purple-200 flex gap-4 items-center cursor-pointer transition-all duration-300 hover:border-purple-600
        has-checked:bg-blue-50 has-checked:border-purple-600 desktop:h-40 desktop:flex-col desktop:justify-between desktop:items-start
      "
    >
      <input
        type="radio"
        name="plan"
        id={plan.id}
        className="hidden"
        value={plan.id}
        {...register("plan")}
      />

      <img className="h-10 aspect-square rounded-full" src={plan.icon} alt={plan.name} />

      <div className={monthly ? "" : "flex flex-col gap-1 tablet:grow tablet:flex-row tablet:justify-between tablet:items-center desktop:gap-2 desktop:flex-col desktop:items-start desktop:justify-end"}>
        <div className={monthly ? "" : "flex flex-col gap-1 tablet:gap-0"}>
          <p className="leading-[120%] text-blue-950 font-medium">{plan.name}</p>
          <p className="text-[14px] leading-[120%]">${monthly ? plan.price.monthly : plan.price.yearly}/{monthly ? "mo" : "yr"}</p>
        </div>
        
        {monthly || (
          <p className="text-[12px] leading-[120%] text-blue-950">2 months free</p>
        )}
      </div>
    </label>
  )
}

export default PlanItem;