import arcadeIcon from "/images/icon-arcade.svg";
import advancedIcon from "/images/icon-advanced.svg";
import proIcon from "/images/icon-pro.svg";

export const plans = [
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

export const addons = [
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
