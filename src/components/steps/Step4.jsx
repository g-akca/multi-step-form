import { useFormContext } from "react-hook-form";

function Step4({ plans, addons, goToStep2 }) {
  const { watch } = useFormContext();
  const billing = watch("billing");
  const selectedPlanId = watch("plan");
  const service = watch("service");
  const storage = watch("storage");
  const profile = watch("profile");

  const selectedPlan = plans.find(plan => plan.id === selectedPlanId);
  const planPrice = billing === "monthly" ? selectedPlan.price.monthly : selectedPlan.price.yearly;

  const selectedAddons = addons.filter(addon => {
    if (addon.id === "service") return service;
    if (addon.id === "storage") return storage;
    if (addon.id === "profile") return profile;
    return false;
  });
  const addonsPrice = selectedAddons.reduce((sum, addon) => sum + (billing === "monthly" ? addon.price.monthly : addon.price.yearly), 0);

  const total = planPrice + addonsPrice;

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-blue-950 text-[24px] leading-[120%] font-bold">Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div className="flex flex-col gap-6 text-[14px] leading-[120%]">
        <div className="bg-blue-50 p-4 rounded-lg flex flex-col gap-4">
          <div className="flex gap-4 justify-between items-center">
            <div>
              <p className="text-[14px] leading-base text-blue-950 font-medium">{selectedPlan.name} ({billing === "monthly" ? "Monthly" : "Yearly"})</p>
              <button type="button" className="text-[14px] leading-[120%]" onClick={goToStep2}>Change</button>
            </div>

            <p className="text-[14px] leading-[120%] text-blue-950 font-bold">${planPrice}/{billing === "monthly" ? "mo" : "yr"}</p>
          </div>
        </div>

        <div className="px-4 flex justify-between items-center">
          <p>Total (per {billing === "monthly" ? "month" : "year"})</p>
          
          <p className="font-bold text-base leading-5 text-purple-600">+${total}/{billing === "monthly" ? "mo" : "yr"}</p>
        </div>
      </div>
    </>
  )
}

export default Step4;