

import Image from "next/image";
import React from "react";

const MainDownSection = () => {
  return (
    <div className="mt-4 flex w-full items-center justify-center px-4 lg:mt-8 mb-10">
      <div className="flex w-full max-w-7xl lg:max-w-md flex-col items-center gap-4">
        <p className="text-center text-sm font-bold sm:text-base">
          Trusted by{" "}
          <span className="text-[#075BFF]">1000+</span>{" "}
          Leading Brands Worldwide
        </p>

        <div className="flex w-full flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 lg:justify-around">
          <Image
            src="/image.png"
            alt="Brand logo"
            width={60}
            height={40}
            className="h-8 w-auto object-contain sm:h-10"
          />

          <Image
            src="/image1.png"
            alt="Brand logo"
            width={60}
            height={40}
            className="h-8 w-auto object-contain sm:h-10"
          />

          <Image
            src="/image3.png"
            alt="Brand logo"
            width={60}
            height={40}
            className="h-8 w-auto object-contain sm:h-10"
          />

          <Image
            src="/image4.png"
            alt="Brand logo"
            width={70}
            height={40}
            className="h-8 w-auto object-contain sm:h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default MainDownSection;