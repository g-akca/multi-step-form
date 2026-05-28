function PlanItem({ id, name, icon, price, check }) {
  return (
    <label className="h-20 p-4 rounded-lg bg-white border border-purple-200 flex gap-4 items-center has-checked:bg-blue-50 has-checked:border-purple-600">
      <input type="radio" name="plan" id={id} className="hidden" defaultChecked={check} />

      <img className="h-10 aspect-square rounded-full" src={icon} alt={name} />

      <div>
        <p className="leading-[120%] text-blue-950 font-medium">{name}</p>
        <p className="text-[14px] leading-[120%]">${price.monthly}/mo</p>
      </div>
    </label>
  )
}

export default PlanItem;