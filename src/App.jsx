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
    shouldUnregister: false,
    mode: "onChange",
  });

  function goNextStep() {
    if (currentStep > 4) return;

    const stepFields = {
      1: ["name", "email", "phone"],
      2: ["plan", "billing"],
      3: ["service", "storage", "profile"],
    };

    const fieldsToValidate = stepFields[currentStep] ?? [];

    if (fieldsToValidate.length > 0) {
      methods.trigger(fieldsToValidate).then(valid => {
        if (valid) setCurrentStep(prev => prev + 1);
      });
    } else {
      setCurrentStep(prev => prev + 1);
    }
  }

  function goPrevStep() {
    if (currentStep >= 2) setCurrentStep(prev => prev - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    goNextStep();
  }

  return (
    <div 
      className="
        text-base leading-base text-grey-500 min-h-screen bg-blue-100 flex flex-col pt-8 pb-26 
        bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-top bg-contain tablet:bg-none
        tablet:px-10.25 tablet:py-12 tablet:justify-center tablet:items-center
      "
    >
      <main 
        className="
          grow flex flex-col gap-8 max-w-235 tablet:grow-0 tablet:w-full tablet:flex-row tablet:bg-white tablet:rounded-[15px] 
          tablet:shadow-[0_25px_40px_rgba(0,0,0,0.095)] tablet:pr-14.5 tablet:min-h-150 tablet:gap-10.5 desktop:pr-25 desktop:gap-21
        "
      >
        <StepList 
          currentStep={currentStep} 
        />

        <FormProvider {...methods}>
          <form 
            onSubmit={handleSubmit}
            className={`
              grow flex flex-col gap-6 ${currentStep === 5 ? "justify-between tablet:justify-center" : "justify-between"} px-4 
              tablet:px-0 tablet:pt-10.75 tablet:pb-8 desktop:pt-11.75 desktop:pb-12
            `}
          >
            <FormSection
              currentStep={currentStep}
              goToStep2={() => setCurrentStep(2)}
            />

            {currentStep <= 4 && (
              <FormFooter 
                currentStep={currentStep}
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
