import { useFormContext } from "react-hook-form";
import PlanItem from "./PlanItem";
import SwitchButton from "./SwitchButton";
import { plans } from "../../data/formData";

function PlanSelectionStep() {
  const { register, watch, setValue } = useFormContext();
  const billing = watch("billing");

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-blue-950 text-[24px] leading-[120%] font-bold tablet:text-[32px]">Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="flex flex-col gap-6 desktop:gap-8">
        <div className="flex flex-col gap-2 desktop:grid desktop:grid-cols-3 desktop:gap-4.5">
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
          <p className={`transition-all duration-200 ${billing === "monthly" ? "text-blue-950" : ""}`}>Monthly</p>
          
          <SwitchButton billing={billing} setBilling={value => setValue("billing", value)} />

          <p className={`transition-all duration-200 ${billing !== "monthly" ? "text-blue-950" : ""}`}>Yearly</p>
        </div>
      </div>
    </>
  )
}

export default PlanSelectionStep;