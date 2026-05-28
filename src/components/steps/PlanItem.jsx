function PlanItem({ plan, check, monthly }) {
  return (
    <label className="h-20 p-4 rounded-lg bg-white border border-purple-200 flex gap-4 items-center has-checked:bg-blue-50 has-checked:border-purple-600">
      <input type="radio" name="plan" id={plan.id} className="hidden" defaultChecked={check} />

      <img className="h-10 aspect-square rounded-full" src={plan.icon} alt={plan.name} />

      <div>
        <p className="leading-[120%] text-blue-950 font-medium">{plan.name}</p>
        <p className="text-[14px] leading-[120%]">${monthly ? plan.price.monthly : plan.price.yearly}/{monthly ? "mo" : "yr"}</p>
        {monthly || (
          <p className="text-[12px] leading-[120%] text-blue-950">2 months free</p>
        )}
      </div>
    </label>
  )
}

export default PlanItem;