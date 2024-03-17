import React from "react";

function Navbar() {
  return (
    <div className="w-full h-20 fixed z-50 flex justify-between bg-transparent font-primary text-neutral-100 font-bold items-center text-2xl px-[6rem] mt-3">
      <div className="start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <div className="center">sFitness</div>
      <div className="end"></div>
    </div>
  );
}

export default Navbar;
