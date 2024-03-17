import React from "react";
import Programs_nav from "./Programs_nav";
import Navbar from "./Navbar";

function Programs() {
  return (
    <div className="grid grid-cols-4">
      <div className="grid-cols-1">
        <Programs_nav />
      </div>
      <div className="col-span-3 pt-[3.75rem] px-[2.5rem] font-primary text-[1.1rem] text-center">
        Choose a program
      </div>
    </div>
  );
}

export default Programs;