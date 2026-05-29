import { useFormContext } from "react-hook-form";
import AddOnItem from "./AddOnItem";

function Step3({ addons }) {
  const { watch, register } = useFormContext();
  const billing = watch("billing");

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-blue-950 text-[24px] leading-[120%] font-bold">Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="flex flex-col gap-2">
        {addons.map(addon => (
          <AddOnItem
            key={addon.id}
            addon={addon}
            monthly={billing === "monthly"}
            register={register}
          />
        ))}
      </div>
    </>
  )
}

export default Step3;