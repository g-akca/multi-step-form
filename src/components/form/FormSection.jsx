import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import Step4 from "../steps/Step4";

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
    1: <Step1 />,
    2: <Step2 plans={plans} />,
    3: <Step3 addons={addons} />,
    4: <Step4 plans={plans} addons={addons} goToStep2={goToStep2} />
  }

  return (
    <div className="bg-white rounded-[10px] px-6 py-8 flex flex-col gap-6 shadow-[0_25px_40px_rgba(0,0,0,0.095)]">
      {steps[currentStep] || <p className="py-6 text-center text-red-500">An error occurred.</p>}
    </div>
  )
}

export default FormSection;