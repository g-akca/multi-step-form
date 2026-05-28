import SwitchButton from "./SwitchButton";

function Step2({ monthly, setMonthly }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-blue-950 text-[24px] leading-[120%] font-bold">Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">

        </div>

        <div className="bg-blue-50 rounded-lg h-12 flex justify-center items-center gap-6 text-[14px] leading-base font-medium">
          <p className={monthly ? "text-blue-950" : ""}>Monthly</p>
          
          <SwitchButton monthly={monthly} setMonthly={setMonthly} />

          <p className={monthly ? "" : "text-blue-950"}>Yearly</p>
        </div>
      </div>
    </>
  )
}

export default Step2;