import PersonalInfoStep from "../steps/PersonalInfoStep";
import PlanSelectionStep from "../steps/PlanSelectionStep";
import AddOnsStep from "../steps/AddOnsStep";
import SummaryStep from "../steps/SummaryStep";
import ConfirmationStep from "../steps/ConfirmationStep";

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

function FormSection({ currentStep, goToStep2 }) {
  const steps = {
    1: <PersonalInfoStep />,
    2: <PlanSelectionStep plans={plans} />,
    3: <AddOnsStep addons={addons} />,
    4: <SummaryStep plans={plans} addons={addons} goToStep2={goToStep2} />,
    5: <ConfirmationStep />
  }

  return (
    <div 
      className="
        bg-white rounded-[10px] px-6 py-8 flex flex-col gap-6 shadow-[0_25px_40px_rgba(0,0,0,0.095)] 
        tablet:bg-transparent tablet:rounded-none tablet:shadow-none tablet:p-0 tablet:gap-8 desktop:gap-10
      "
    >
      {steps[currentStep] || <p className="py-6 text-center text-red-500 tablet:text-[18px] desktop:text-[20px]">An error occurred.</p>}
    </div>
  )
}

export default FormSection;