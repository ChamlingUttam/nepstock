import React from "react";
import Left from "./Left";
import Right from "./Right";

const Analysis = () => {
  return (
    <div className="w-full px-7 lg:px-10">
      <div className="mx-auto flex items-center justify-center w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Analysis;