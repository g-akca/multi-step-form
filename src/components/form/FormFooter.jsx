function FormFooter({ currentStep, goPrevStep, disabled }) {
  return (
    <div 
      className={`
        fixed bottom-0 left-0 w-screen p-4 bg-white shadow-[0_25px_40px_rgba(0,0,0,0.095)] 
        flex items-center ${currentStep >= 2 ? "justify-between" : "justify-end"} tablet:relative 
        tablet:w-auto tablet:shadow-none tablet:p-0 tablet:bg-transparent
      `}
    >
      {currentStep >= 2 && (
        <button
          type="button"
          onClick={goPrevStep}
          disabled={disabled}
          className="leading-[120%] font-medium cursor-pointer transition-all duration-300 hover:text-blue-950 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Go Back
        </button>
      )}

      <button 
        type="submit" 
        disabled={disabled}
        className={`
          h-10 w-24.25 px-4 rounded-sm text-white text-[14px] leading-base font-medium cursor-pointer transition-all duration-300
          ${currentStep <= 3 ? "bg-blue-950 hover:bg-blue-700" : "bg-purple-600 hover:bg-purple-400"} 
          tablet:h-12 tablet:w-30.75 tablet:rounded-lg tablet:text-base tablet:leading-[120%]
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      >
        {currentStep <= 3 ? "Next Step" : "Confirm"}
      </button>
    </div>
  )
}

export default FormFooter;