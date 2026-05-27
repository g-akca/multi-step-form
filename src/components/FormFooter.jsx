function FormFooter({ goNextStep, goPrevStep }) {
  return (
    <div className="fixed bottom-0 left-0 w-screen p-4 bg-white flex justify-end shadow-[0_25px_40px_rgba(0,0,0,0.095)]">
      <button 
        type="button" 
        onClick={goNextStep}
        className="h-10 px-4 bg-blue-950 rounded-sm text-white text-[14px] leading-base font-medium"
      >
        Next Step
      </button>
    </div>
  )
}

export default FormFooter;