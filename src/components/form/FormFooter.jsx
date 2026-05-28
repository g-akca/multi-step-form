function FormFooter({ currentStep, goNextStep, goPrevStep }) {
  return (
    <div className={`fixed bottom-0 left-0 w-screen p-4 bg-white shadow-[0_25px_40px_rgba(0,0,0,0.095)] flex items-center ${currentStep >= 2 ? "justify-between" : "justify-end"}`}>
      {currentStep >= 2 && (
        <button
          type="button"
          onClick={goPrevStep}
          className="leading-[120%] font-medium"
        >
          Go Back
        </button>
      )}

      <button 
        type="button" 
        onClick={goNextStep}
        className={`h-10 w-24.25 px-4 rounded-sm text-white text-[14px] leading-base font-medium ${currentStep <= 3 ? "bg-blue-950" : "bg-purple-600"}`}
      >
        {currentStep <= 3 ? "Next Step" : "Confirm"}
      </button>
    </div>
  )
}

export default FormFooter;