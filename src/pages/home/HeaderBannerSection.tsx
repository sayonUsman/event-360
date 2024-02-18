import bg from "../../assets/images/BG.png";

const HeaderBannerSection = () => {
  return (
    <>
      <img src={bg} alt="image" />

      <div className="absolute top-0 flex justify-center items-center w-full max-w-[90rem] h-[17.1875rem] sm:h-[24.375rem] md:h-[31.25rem] lg:h-[42rem] xl:h-[48.5rem] 2xl:h-[51rem] bg-transparent">
        <div className="w-full md:max-w-[485px] lg:max-w-[625px] xl:max-w-[775px] 2xl:max-w-[917px]">
          <h1 className="text-[20px] sm:text-[24px] md:text-[34px] lg:text-[44px] xl:text-[54px] 2xl:text-[64px] text-white font-extrabold text-center">
            BRAND NEW EVENT PACKAGES
          </h1>

          <h2 className="text-[18px] sm:text-[20px] md:text-[26px] lg:text-[36px] xl:text-[46px] 2xl:text-[56px] text-[#FFD600] font-extrabold text-center py-2 sm:py-3 md:py-0">
            For Winter
          </h2>

          <p className="hidden md:block text-[16px] lg:text-[18px] xl:text-[20px] text-white text-center md:py-4 lg:py-5 2xl:py-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
            nec gravida ipsum pulvinar vel non.
          </p>

          <div className="flex justify-center items-center">
            <button className="w-[100px] sm:w-[142px] lg:w-[192px] h-[24px] sm:h-[32px] lg:h-[52px] bg-gradient-to-r from-[#FEC600] to-[#CB9201] text-[12px] sm:text-[16px] font-bold">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBannerSection;
