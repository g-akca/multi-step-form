import { useFormContext } from "react-hook-form";
import AddOnItem from "./AddOnItem";

const addons = [
  {
    id: "service",
    name: "Online service",
    details: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10
    }
  },
  {
    id: "storage",
    name: "Larger storage",
    details: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20
    }
  },
  {
    id: "profile",
    name: "Customizable profile",
    details: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20
    }
  }
];

function Step3() {
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