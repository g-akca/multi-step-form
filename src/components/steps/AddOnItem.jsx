function AddOnItem({ addon, monthly }) {
  return (
    <label className="px-4 py-[13.5px] flex gap-4 items-center justify-between rounded-lg bg-white border border-purple-200 has-checked:bg-blue-50 has-checked:border-purple-600">
      <div className="flex gap-4 items-center">
        <input type="checkbox" name="addon" id={addon.id} />

        <div>
          <p className="text-blue-950 text-[14px] leading-base font-medium">{addon.name}</p>
          <p className="text-[12px] leading-[120%]">{addon.details}</p>
        </div>
      </div>

      <p className="text-[12px] leading-[120%] text-purple-600">+${monthly ? addon.price.monthly : addon.price.yearly}/{monthly ? "mo" : "yr"}</p>
    </label>
  )
}

export default AddOnItem;