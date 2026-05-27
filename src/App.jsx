import StepList from "./components/StepList";
import FormSection from "./components/FormSection";
import FormFooter from "./components/FormFooter";
import { useState } from "react";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  function goNextStep() {
    if (currentStep <= 4) setCurrentStep(prev => prev + 1);
  }

  function goPrevStep() {
    if (currentStep >= 2) setCurrentStep(prev => prev - 1);
  }

  return (
    <div className="text-base leading-base text-grey-500 min-h-screen bg-blue-100 flex flex-col pt-8 bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-top bg-contain">
      <main className="grow flex flex-col gap-8">
        <StepList 
          currentStep={currentStep} 
        />

        <form className="grow flex flex-col gap-6 justify-between px-4">
          <FormSection />
          <FormFooter 
            goNextStep={goNextStep} 
            goPrevStep={goPrevStep} 
          />
        </form>
      </main>
    </div>
  )
}

export default App
