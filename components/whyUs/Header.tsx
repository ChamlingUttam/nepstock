

import React from "react";

const Header = () => {
  return (
    // <div className="flex w-full justify-center px-4 py-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <header className="flex w-full max-w-7xl flex-col items-center justify-center rounded-2xl  px-5 py-12 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
        <p className="text-sm font-semibold text-[#075BFF] sm:text-base">
          Why Choose Us
        </p>

        <h1 className="mt-4 text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
         Everything You Need to Run <br />
Your Business Smarter
        </h1>

        <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-gray-400 sm:text-base">
       From managing everyday inventory to scaling across multiple locations, our platform brings everything 
together in one simple, powerful system—built specifically for the way Nepali businesses operate.
        </p>

        
      </header>
    // </div>
  );
};

export default Header;