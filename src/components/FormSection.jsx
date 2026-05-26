function FormSection() {
  return (
    <div className="bg-white rounded-[10px] px-6 py-8 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" />
        </div>
      </div>
    </div>
  )
}

export default FormSection;