import PlanItem from "./PlanItem";
import SwitchButton from "./SwitchButton";

const plans = [
  {
    id: "arcade",
    name: "Arcade",
    iconSrc: "/images/icon-arcade.svg",
    price: {
      monthly: 9,
      yearly: 90
    }
  },
  {
    id: "advanced",
    name: "Advanced",
    iconSrc: "/images/icon-advanced.svg",
    price: {
      monthly: 12,
      yearly: 120
    }
  },
  {
    id: "pro",
    name: "Pro",
    iconSrc: "/images/icon-pro.svg",
    price: {
      monthly: 15,
      yearly: 150
    }
  }
];

function Step2({ monthly, setMonthly }) {
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
              id={plan.id}
              name={plan.name}
              iconSrc={plan.iconSrc}
              price={plan.price}
            />
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg h-12 flex justify-center items-center gap-6 text-[14px] leading-base font-medium">
          <p className={monthly ? "text-blue-950" : ""}>Monthly</p>
          
          <SwitchButton monthly={monthly} setMonthly={setMonthly} />

          <p className={monthly ? "" : "text-blue-950"}>Yearly</p>
        </div>
      </div>
    </>
  )
}

export default Step2;