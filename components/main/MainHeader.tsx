

import React from "react";
import { Button } from "../ui/button";

const MainHeader = () => {
  return (
    // <div className="flex w-full justify-center px-4 py-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <header className="flex w-full  flex-col items-center justify-center rounded-2xl  px-5 py-12 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
        <p className="text-sm font-semibold text-[#075BFF] sm:text-base">
          Nepal's #1 Inventory Management Platform
        </p>

        <h1 className="mt-4 text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
          Simplify Your Shop  <br />
          Inventory Like <span className="text-[#075BFF]">Never Before</span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-gray-400 sm:text-base">
         Track stock levels, manage suppliers, and grow your business with StockNep's all-in-one inventory
          management solution. Perfect for Nepali businesses.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button className="w-full bg-[#075BFF] px-6 py-3 text-white hover:bg-[#064dcc] sm:w-auto">
            START FREE TRIAL
          </Button>

          <Button
            variant="outline"
            className="w-full border-[#075BFF] px-6 py-3 text-[#075BFF] hover:bg-[#075BFF] hover:text-white sm:w-auto"
          >
            BOOK A DEMO
          </Button>
        </div>
      </header>
    // </div>
  );
};

export default MainHeader;