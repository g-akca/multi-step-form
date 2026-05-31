import { useFormContext } from "react-hook-form";

function Step1() {
  const { register } = useFormContext();

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-blue-950 text-[24px] leading-[120%] font-bold">Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      
      <div className="flex flex-col gap-4 text-blue-950 text-[12px] leading-[120%]">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            className="px-4 py-2 h-10 rounded-sm border border-purple-200 text-[14px] leading-base font-medium"
            {...register("name")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className="px-4 py-2 h-10 rounded-sm border border-purple-200 text-[14px] leading-base font-medium"
            {...register("email")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            className="px-4 py-2 h-10 rounded-sm border border-purple-200 text-[14px] leading-base font-medium"
            {...register("phone")}
          />
        </div>
      </div>
    </>
  )
}

export default Step1;