

import React from "react";
import { Button } from "../ui/button";

const TestimonialHeader = () => {
  return (
    <header className="w-full px-4 py-10 sm:px-6 lg:px-10">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
  
  {/* Left */}
  <div className="max-w-2xl">
    <p className="mb-3 text-sm font-semibold tracking-wider text-[#057BFF]">
      TESTIMONIAL
    </p>

    <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:text-5xl">
      Trusted by 500+
      <br />
      Businesses Across Nepal
    </h1>
  </div>

  {/* Right */}
  <div className="flex max-w-md flex-col gap-5 lg:mt-10">
    <p className="text-base leading-7 text-[#475569]">
      See how StockNep helps retailers, distributors, and traders cut
      costs and stop losing track of stock.
    </p>

    <Button className="cursor-pointer bg-[#007BFF] w-fit px-6 py-3 font-bold text-white hover:bg-[#085bb4]">
      START FREE TRIAL
    </Button>
  </div>

</section>
    </header>
  );
};

export default TestimonialHeader;
