import Image from "next/image";
import React from "react";

const MainImage = () => {
  return (
    <div className="flex w-full justify-center px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="relative aspect-[1216/734.5] w-full max-w-6xl">
        <Image
          src="/Macbook.png"
          alt="MacBook"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default MainImage;