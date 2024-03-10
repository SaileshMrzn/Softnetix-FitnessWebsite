import React from "react";

function Content2() {
  return (
    <>
      <div className="mt-[8rem] mx-[6rem] font-primary text-gray-500 relative z-20">
        <p className="text-[2rem]">Welcome to sFitness</p>
        <p className="font-bold text-[6rem] max-w-[75%]">
          Fitness is not a destination. It is a way of life
        </p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/4398382/pexels-photo-4398382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="absolute xl:right-0 md:right-[-20%] top-[20%] h-[70%] z-0"
        />
      </div>
    </>
  );
}

export default Content2;
