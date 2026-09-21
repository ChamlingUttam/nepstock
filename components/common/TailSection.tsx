import React from "react";
import { Button } from "../ui/button";

const TailSection = () => {
  return (
    <div className="flex w-full justify-center px-4 pb-10 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <section className="flex h-[439px] w-full max-w-[1500px] flex-col items-center justify-center rounded-2xl bg-[#E6F2FF] px-5 text-center sm:px-8 md:px-12 lg:px-16">
        <p className="text-sm font-semibold text-[#007BFF] sm:text-base">
          NEPAL&apos;S #1 INVENTORY MANAGEMENT PLATFORM
        </p>

       <h1 className="mt-5.5 text-4xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
          Ready to Transform
          <br />
          <span className="mt-7 inline-block">Your Business?</span>
        </h1>

        <p className="mt-6.5 max-w-3xl text-sm font-light leading-6 text-gray-800 sm:text-base">
          Join hundreds of Nepali businesses who transformed their
          <br className="hidden sm:block" />
          inventory management with StockNep
        </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
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
      </section>
    </div>
  );
};

export default TailSection;