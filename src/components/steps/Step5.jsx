import thankYouIcon from "/images/icon-thank-you.svg";

function Step5() {
  return (
    <>
      <img src={thankYouIcon} alt="Thank you icon" className="w-14 self-center mt-12" />

      <div className="flex flex-col gap-2 text-center mb-12">
        <h2 className="text-[24px] leading-[120%] text-blue-950 font-bold">Thank you!</h2>

        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </>
  )
}

export default Step5;