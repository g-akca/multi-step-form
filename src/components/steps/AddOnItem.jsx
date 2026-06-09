function AddOnItem({ addon, monthly, register }) {
  return (
    <label 
      className="
        px-4 py-[13.5px] flex gap-4 items-center justify-between rounded-lg bg-white border border-purple-200 
        has-checked:bg-blue-50 has-checked:border-purple-600 tablet:px-6 tablet:py-4
      "
    >
      <div className="flex gap-4 items-center tablet:gap-6">
        <input 
          type="checkbox" 
          name="addon" 
          id={addon.id} 
          className="h-5 aspect-square rounded-sm accent-purple-600" 
          {...register(addon.id)} 
        />

        <div className="tablet:gap-2">
          <p className="text-blue-950 text-[14px] leading-base font-medium tablet:text-[16px] tablet:leading-[120%]">{addon.name}</p>
          <p className="text-[12px] leading-[120%] tablet:text-[14px]">{addon.details}</p>
        </div>
      </div>

      <p className="text-[12px] leading-[120%] text-purple-600 tablet:text-[14px]">+${monthly ? addon.price.monthly : addon.price.yearly}/{monthly ? "mo" : "yr"}</p>
    </label>
  )
}

export default AddOnItem;