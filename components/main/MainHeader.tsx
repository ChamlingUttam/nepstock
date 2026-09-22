import React from "react";
import { Button } from "../ui/button";

const MainHeader = () => {
  return (
    <header className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-12 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <p className="text-[14px] font-semibold uppercase leading-5 tracking-[-0.02em] text-[#007BFF]">
        Nepal&apos;s #1 Inventory Management Platform
      </p>

     <h1 className="mt-4 text-center text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="block">Simplify Your Shop</span>

        <span className="mt-[12px] block">
        Inventory Like{" "}
        <span className="text-[#075BFF]">Never Before</span>
      </span>
      </h1>

      <p className="mt-4 w-full max-w-2xl text-center text-sm font-normal leading-6 text-[#6a7178] sm:text-base">
        Track stock levels, manage suppliers, and grow your business with
        StockNep&apos;s all-in-one inventory management solution. Perfect for
        Nepali businesses.
      </p>

      <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
        <Button
          variant="outline"
          className="w-full cursor-pointer border-[#007BFF] px-8 py-5 text-[#007BFF] hover:bg-[#007BFF] hover:text-white sm:w-auto"
        >
          START FREE TRIAL
        </Button>

        <Button
          variant="outline"
          className="w-full cursor-pointer border-[#007BFF] px-8 py-5 text-[#007BFF] hover:bg-[#007BFF] hover:text-white sm:w-auto"
        >
          BOOK A DEMO
        </Button>
      </div>
    </header>
  );
};

export default MainHeader;