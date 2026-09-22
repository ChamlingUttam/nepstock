import Image from "next/image";
import React from "react";

const MainDownSection = () => {
  return (
    <div className="mb-10 mt-2 flex w-full items-center justify-center px-4 lg:mt-8">
      <div className="flex w-full max-w-7xl flex-col items-center gap-10">
        <p className="text-center font-[Poppins] text-base font-semibold leading-6 tracking-[-2%] text-black sm:text-lg sm:leading-7 md:text-[24px] md:leading-[30px]">
          Trusted by{" "}
          <span className="text-[#075BFF]">1000+</span>{" "}
          Leading Brands Worldwide
        </p>
        <div className="flex w-full flex-wrap items-center justify-center gap-16 sm:gap-25 md:gap-24">

          <Image
            src="/image.png"
            alt="Brand logo"
            width={64}
            height={60}
            className="h-12 w-auto object-contain sm:h-14 md:h-[60px]"
          />

          <Image
            src="/img.png"
            alt="Brand logo"
            width={64}
            height={60}
            className="h-12 w-auto object-contain sm:h-14 md:h-[60px]"
          />

          <Image
            src="/image3.png"
            alt="Brand logo"
            width={64}
            height={60}
            className="h-12 w-auto object-contain sm:h-14 md:h-[60px]"
          />

          <Image
            src="/image4.png"
            alt="Brand logo"
            width={64}
            height={60}
            className="h-12 w-auto object-contain sm:h-14 md:h-[60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MainDownSection;