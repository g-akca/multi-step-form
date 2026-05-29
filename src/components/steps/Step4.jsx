import { useFormContext } from "react-hook-form";

function Step4() {
  const { watch } = useFormContext();
  const billing = watch("billing");

  return (
    <>
      <div className="flex flex-col gap-2">
          <h2 className="text-blue-950 text-[24px] leading-[120%] font-bold">Finishing up</h2>
          <p>Double-check everything looks OK before confirming.</p>
        </div>

        <div className="flex flex-col gap-6 text-[14px] leading-[120%]">
          <div className="bg-blue-50 p-4 rounded-lg">

          </div>

          <div className="px-4 flex justify-between items-center">
            <p>Total (per {billing === "monthly" ? "month" : "year"})</p>
            
            <p className="font-bold text-base leading-5 text-purple-600">+${}/{billing === "monthly" ? "mo" : "yr"}</p>
          </div>
        </div>
    </>
  )
}

export default Step4;