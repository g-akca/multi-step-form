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
        <h2 className="text-blue-950 text-[24px] leading-[120%] font-bold tablet:text-[32px]">Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div className="flex flex-col gap-6 text-[14px] leading-[120%] tablet:gap-8">
        <div className="bg-blue-50 p-4 rounded-lg flex flex-col gap-4 desktop:px-6">
          <div className="flex gap-4 justify-between items-center tablet:px-1 desktop:px-0">
            <div className="flex flex-col items-start tablet:gap-2">
              <p className="leading-base text-blue-950 font-medium tablet:text-base tablet:leading-[120%]">
                {selectedPlan.name} ({billing === "monthly" ? "Monthly" : "Yearly"})
              </p>
              
              <button 
                type="button" 
                onClick={goToStep2} 
                className="cursor-pointer transition-all duration-300 hover:text-purple-600"
              >
                Change
              </button>
            </div>

            <p className="text-blue-950 font-bold tablet:text-base tablet:leading-5">
              ${planPrice}/{billing === "monthly" ? "mo" : "yr"}
            </p>
          </div>

          {selectedAddons.length > 0 && (
            <>
              <hr className="border-grey-500/20" />

              {selectedAddons.map(addon => (
                <div key={addon.id} className="flex gap-4 items-center justify-between tablet:px-1 desktop:px-0">
                  <p>{addon.name}</p>
                  
                  <p className="text-blue-950">
                    +${billing === "monthly" ? `${addon.price.monthly}/mo` : `${addon.price.yearly}/yr`}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="px-4 flex justify-between items-center tablet:px-[22.5px] desktop:px-6">
          <p>Total (per {billing === "monthly" ? "month" : "year"})</p>
          
          <p className="font-bold text-base leading-5 text-purple-600 tablet:text-[20px]">+${total}/{billing === "monthly" ? "mo" : "yr"}</p>
        </div>
      </div>
    </>
  )
}

export default Step4;