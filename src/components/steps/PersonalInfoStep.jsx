import { useFormContext } from "react-hook-form";
import PersonalInfoField from "./PersonalInfoField";

function PersonalInfoStep() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-blue-950 text-[24px] leading-[120%] font-bold tablet:text-[32px]">Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      
      <div className="flex flex-col gap-4 text-blue-950 text-[12px] leading-[120%] tablet:gap-6 tablet:text-[14px]">
        <PersonalInfoField
          label="Name"
          fieldName="name"
          type="text"
          placeholder="e.g. Stephen King"
          register={register}
          validation={{ required: "This field is required" }}
          error={errors.name}
        />

        <PersonalInfoField
          label="Email Address"
          fieldName="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          register={register}
          validation={{
            required: "This field is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" }
          }}
          error={errors.email}
        />

        <PersonalInfoField
          label="Phone Number"
          fieldName="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          register={register}
          validation={{
            required: "This field is required",
            pattern: { value: /^\+?[0-9\s-]{7,15}$/, message: "Enter a valid phone number" }
          }}
          error={errors.phone}
        />
      </div>
    </>
  )
}

export default PersonalInfoStep;