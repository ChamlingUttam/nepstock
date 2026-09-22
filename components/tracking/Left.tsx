import React from "react";
import { Button } from "../ui/button";
import { AlertTriangle, Clock, ShoppingBag } from "lucide-react";

const Left = () => {
  return (
    <div className="w-full">
      <header className="flex w-full flex-col">
        <div className="flex items-center gap-2 font-[Poppins] text-[16px] font-semibold leading-6 text-[#057BFF]">
          <ShoppingBag className="h-5 w-5 shrink-0" />
          <span>STOCK TRACKING</span>
        </div>

        <h1 className="mt-7 w-full max-w-2xl font-[Poppins] text-[32px] font-semibold leading-[44px] tracking-[-0.64px] text-[#111827]">
          Track Every Item and Keep Your Inventory Under Control
        </h1>

        <p className="mt-4 w-full max-w-2xl font-[Poppins] text-[18px] font-normal leading-[28px] tracking-[-0.54px] text-[#475569]">
          Keep your inventory accurate, organized, and up to date with real-time
          stock monitoring.
        </p>

        <div className="mt-6 flex w-full flex-col gap-5 font-[Poppins] text-[18px] font-normal leading-7 text-[#1E293B]">
          <div className="flex items-center gap-4">
            <Clock className="h-7 w-7 shrink-0 text-[#475569]" />
            <span>Real-time stock updates</span>
          </div>

          <div className="flex items-center gap-4">
            <AlertTriangle className="h-7 w-7 shrink-0 text-[#475569]" />
            <span>Low-stock alerts</span>
          </div>

          <div className="flex items-center gap-4">
            <ShoppingBag className="h-7 w-7 shrink-0 text-[#475569]" />
            <span>Product quantity tracking</span>
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row">
          <Button className="w-full cursor-pointer bg-[#075BFF] px-8 py-3 text-white hover:bg-[#064dcc] sm:w-auto">
            START FREE TRIAL
          </Button>

          <Button
            variant="outline"
            className="w-full cursor-pointer border-[#D7DCE3] bg-white px-8 py-3 text-[#475569] hover:bg-gray-50 sm:w-auto"
          >
            BOOK A DEMO
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Left;