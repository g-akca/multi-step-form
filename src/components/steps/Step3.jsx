import AddOnItem from "./AddOnItem";

function Step3() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-blue-950 text-[24px] leading-[120%] font-bold">Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="flex flex-col gap-2">
        <AddOnItem />
        <AddOnItem />
        <AddOnItem />
      </div>
    </>
  )
}

export default Step3;