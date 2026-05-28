import { useFormContext } from "react-hook-form";
import PlanItem from "./PlanItem";
import SwitchButton from "./SwitchButton";
import arcadeIcon from "/images/icon-arcade.svg";
import advancedIcon from "/images/icon-advanced.svg";
import proIcon from "/images/icon-pro.svg";

const plans = [
  {
    id: "arcade",
    name: "Arcade",
    icon: arcadeIcon,
    price: {
      monthly: 9,
      yearly: 90
    }
  },
  {
    id: "advanced",
    name: "Advanced",
    icon: advancedIcon,
    price: {
      monthly: 12,
      yearly: 120
    }
  },
  {
    id: "pro",
    name: "Pro",
    icon: proIcon,
    price: {
      monthly: 15,
      yearly: 150
    }
  }
];

function Step2() {
  const { register, watch, setValue } = useFormContext();
  const billing = watch("billing");

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-blue-950 text-[24px] leading-[120%] font-bold">Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {plans.map(plan => (
            <PlanItem 
              key={plan.id}
              plan={plan}
              register={register}
              monthly={billing === "monthly"}
            />
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg h-12 flex justify-center items-center gap-6 text-[14px] leading-base font-medium">
          <p className={billing === "monthly" ? "text-blue-950" : ""}>Monthly</p>
          
          <SwitchButton billing={billing} setBilling={value => setValue("billing", value)} />

          <p className={billing !== "monthly" ? "text-blue-950" : ""}>Yearly</p>
        </div>
      </div>
    </>
  )
}

export default Step2;