import React from "react";
import Programs_nav from "./Programs_nav";
import { useInView } from "react-intersection-observer";

function Programs() {
  const { ref, inView } = useInView();
  return (
    <div className="grid grid-cols-4 bg-gray-900 overflow-hidden">
      <div
        className={`grid-cols-1 w-screen ${
          inView
            ? "translate-x-0 opacity-100 transition-all ease-in-out duration-500 delay-200"
            : "-translate-x-64 opacity-0"
        }`}
        ref={ref}
      >
        <Programs_nav />
      </div>
      <div className="col-span-3 pt-[3.75rem] px-[2.5rem] font-primary text-[1.1rem] text-center h-screen">
        Choose a program
      </div>
    </div>
  );
}

export default Programs;
