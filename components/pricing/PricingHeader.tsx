

import React from "react";

const PricingHeader = () => {
  return (
    // <div className="flex w-full justify-center px-4 py-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <header className="flex w-full max-w-7xl flex-col items-center justify-center rounded-2xl  px-5 py-12 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
        <p className="text-sm font-semibold text-[#075BFF] sm:text-base">
          No Hidden Costs
        </p>

        <h1 className="mt-4 text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
       Pick the Plan That Fits Your Shop 
        </h1>

        <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-gray-400 sm:text-base">
      Every plan does exactly what it says. Try any of them free for 14 days — no card, no catch.
        </p>

        
      </header>
    // </div>
  );
};

export default PricingHeader ;