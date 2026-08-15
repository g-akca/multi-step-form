import { useFormContext } from "react-hook-form";

function PersonalInfoStep() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-blue-950 text-[24px] leading-[120%] font-bold tablet:text-[32px]">Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      
      <div className="flex flex-col gap-4 text-blue-950 text-[12px] leading-[120%] tablet:gap-6 tablet:text-[14px]">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="name">Name</label>

            {errors.name && <p className="text-red-500 font-bold tracking-[1px]">{errors.name.message}</p>}
          </div>

          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            className={`
              px-4 py-2 h-10 rounded-sm border border-purple-200 text-[14px] leading-base font-medium transition-all duration-300 
              tablet:h-12 tablet:rounded-lg tablet:text-base tablet:leading-[120%] hover:border-purple-600 focus:outline-none 
              focus:border-purple-600 ${errors.name && "border-red-500"}
            `}
            {...register("name", { required: "This field is required" })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="email">Email Address</label>

            {errors.email && <p className="text-red-500 font-bold tracking-[1px]">{errors.email.message}</p>}
          </div>

          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className={`
              px-4 py-2 h-10 rounded-sm border border-purple-200 text-[14px] leading-base font-medium transition-all duration-300 
              tablet:h-12 tablet:rounded-lg tablet:text-base tablet:leading-[120%] hover:border-purple-600 focus:outline-none 
              focus:border-purple-600 ${errors.email && "border-red-500"}
            `}
            {...register("email", { required: "This field is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" } })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="phone">Phone Number</label>

            {errors.phone && <p className="text-red-500 font-bold tracking-[1px]">{errors.phone.message}</p>}
          </div>
          
          <input
            id="phone"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            className={`
              px-4 py-2 h-10 rounded-sm border border-purple-200 text-[14px] leading-base font-medium transition-all duration-300 
              tablet:h-12 tablet:rounded-lg tablet:text-base tablet:leading-[120%] hover:border-purple-600 focus:outline-none 
              focus:border-purple-600 ${errors.phone && "border-red-500"}
            `}
            {...register("phone", { required: "This field is required", pattern: { value: /^\+?[0-9\s-]{7,15}$/, message: "Enter a valid phone number" } })}
          />
        </div>
      </div>
    </>
  )
}

export default PersonalInfoStep;