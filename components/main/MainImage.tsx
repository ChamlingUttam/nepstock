
import Image from "next/image";
import React from "react";

const MainImage = () => {
  return (
    <div className="flex w-full items-center justify-center px-4">
      <div className="relative h-50 w-full max-w-225 sm:h-75 md:h-100 lg:h-125">
        <Image
          src="/Macbook.png"
          alt="MacBook"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default MainImage;