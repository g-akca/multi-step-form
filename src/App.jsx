import StepList from "./components/nav/StepList";
import FormSection from "./components/form/FormSection";
import FormFooter from "./components/form/FormFooter";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      billing: "monthly",
      service: false,
      storage: false,
      profile: false
    },
    shouldUnregister: false
  });

  function goNextStep() {
    if (currentStep <= 4) setCurrentStep(prev => prev + 1);
  }

  function goPrevStep() {
    if (currentStep >= 2) setCurrentStep(prev => prev - 1);
  }

  return (
    <div className="text-base leading-base text-grey-500 min-h-screen bg-blue-100 flex flex-col pt-8 pb-26 bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-top bg-contain">
      <main className="grow flex flex-col gap-8">
        <StepList 
          currentStep={currentStep} 
        />

        <FormProvider {...methods}>
          <form className="grow flex flex-col gap-6 justify-between px-4">
            <FormSection
              currentStep={currentStep}
            />

            {currentStep <= 4 && (
              <FormFooter 
                currentStep={currentStep}
                goNextStep={goNextStep} 
                goPrevStep={goPrevStep} 
              />
            )}
          </form>
        </FormProvider>
      </main>
    </div>
  )
}

export default App
