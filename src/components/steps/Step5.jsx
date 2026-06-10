import thankYouIcon from "/images/icon-thank-you.svg";

function Step5() {
  return (
    <div className="py-12 flex flex-col gap-6 tablet:py-0 tablet:px-4.75 tablet:gap-8">
      <img src={thankYouIcon} alt="Thank you icon" className="w-14 aspect-square self-center tablet:w-20" />

      <div className="flex flex-col gap-2 text-center tablet:gap-4">
        <h2 className="text-[24px] leading-[120%] text-blue-950 font-bold tablet:text-[32px]">Thank you!</h2>

        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </div>
  )
}

export default Step5;