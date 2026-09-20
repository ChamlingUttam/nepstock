import React from "react";
import { Button } from "../ui/button";

const TailSection = () => {
  return (
    <div className="flex w-full justify-center px-4 py-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <section className="flex w-full max-w-[1600px] flex-col items-center justify-center rounded-2xl bg-[#E6F2FF] px-5 py-10 text-center sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <p className="text-sm font-semibold text-[#075BFF] sm:text-base">
          NEPAL&apos;S #1 INVENTORY MANAGEMENT PLATFORM
        </p>

        <h1 className="mt-4 text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
          Ready to Transform <br />
          Your Business?
        </h1>

        <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-gray-400 sm:text-base">
          Join hundreds of Nepali businesses who transformed their
          <br className="hidden sm:block" />
          inventory management with StockNep
        </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Button className="w-full cursor-pointer bg-[#075BFF] px-8 py-5 text-white hover:bg-[#064dcc] sm:w-auto">
          START FREE TRIAL
        </Button>

        <Button
          variant="outline"
          className="w-full cursor-pointer border-[#075BFF] px-8 py-5 text-[#075BFF] hover:bg-[#075BFF] hover:text-white sm:w-auto"
        >
          BOOK A DEMO
        </Button>
      </div>
      </section>
    </div>
  );
};

export default TailSection;