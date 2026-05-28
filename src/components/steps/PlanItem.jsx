function PlanItem({ id, name, iconSrc, price }) {
  return (
    <label className="h-20 p-4 rounded-lg bg-white border border-purple-200 flex items-center has-checked:bg-blue-50 has-checked:border-purple-600">
      <input type="radio" name="plan" className="hidden" />

      <div className="flex gap-4">
        <img className="h-10 aspect-square rounded-full" />

        <div>
          <p className="leading-[120%] text-blue-950 font-medium"></p>
          <p className="text-[14px] leading-[120%]"></p>
        </div>
      </div>
    </label>
  )
}

export default PlanItem;