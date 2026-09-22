import Image from "next/image";
import React from "react";

const Right = () => {
  return (
    <div className="relative w-full max-w-[625px] overflow-hidden rounded-2xl border border-[#D7E2F0] aspect-[625/420]">
      <Image
        src="/Product.png"
        alt="Product dashboard"
        fill
        className="object-contain"
      />
    </div>
  );
};

export default Right;