import React from "react";
import Left from "./Left";
import Right from "./Right";

const Tracking = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1384px] flex-col items-center gap-10 px-4 py-12 sm:px-6 md:px-8 lg:h-[534px] lg:flex-row lg:gap-16 lg:px-1 lg:py-12">
      <div className="flex w-full min-w-0 flex-1 items-center">
        <Left />
      </div>

      <div className="flex w-full min-w-0 flex-1 items-center">
        <Right />
      </div>
    </div>
  );
};

export default Tracking;