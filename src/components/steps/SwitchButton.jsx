function SwitchButton({ monthly, setMonthly }) {
  return (
    <button 
      type="button" 
      onClick={() => setMonthly(prev => !prev)} className="bg-blue-950 p-1 h-5 w-9.5 rounded-[10px]"
    >
      <div className={`bg-white h-3 aspect-square rounded-full transition-all duration-200 ${monthly ? "translate-x-0" : "translate-x-4.5"}`} />
    </button>
  )
}

export default SwitchButton;