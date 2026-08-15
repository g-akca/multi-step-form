function PersonalInfoField({ label, fieldName, type, placeholder, register, validation, error }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center justify-between">
        <label htmlFor={fieldName}>{label}</label>

        {error && <p className="text-red-500 font-bold tracking-[1px]">{error.message}</p>}
      </div>

      <input
        id={fieldName}
        type={type}
        placeholder={placeholder}
        className={`
          px-4 py-2 h-10 rounded-sm border border-purple-200 text-[14px] leading-base font-medium transition-all duration-300 
          tablet:h-12 tablet:rounded-lg tablet:text-base tablet:leading-[120%] hover:border-purple-600 focus:outline-none 
        focus:border-purple-600 ${error ? "border-red-500" : ""}
        `}
        {...register(fieldName, validation)}
      />
    </div>
  );
}

export default PersonalInfoField;
