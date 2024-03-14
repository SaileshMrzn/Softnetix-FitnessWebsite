import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Content2() {
  const { ref: refTxt, inView: inViewTxt } = useInView();
  const { ref: refImg, inView: inViewImg } = useInView();

  return (
    <>
      <div
        className="mt-[8rem] mx-[6rem] font-primary text-gray-500 relative z-20"
        ref={refTxt}
      >
        <p className="text-[2rem]">Welcome to sFitness</p>
        <p
          className={`font-bold text-[6rem] max-w-[70%] opacity-0 translate-y-40 ${
            inViewTxt
              ? "opacity-100 translate-y-0 transition-all ease-in-out duration-500 delay-300"
              : ""
          }`}
        >
          Fitness is not a destination. It is a way of life
        </p>
      </div>
      <div ref={refImg}>
        <img
          src="https://images.pexels.com/photos/4398382/pexels-photo-4398382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={`absolute xl:right-[-20%] md:right-[-40%] top-[20%] h-[70%] z-0 opacity-0 ${
            inViewImg
              ? "xl:right-[0%] md:right-[-20%] opacity-100 transition-all ease-in-out duration-500 delay-200"
              : "xl:right-[-20%] md:right-[-40%] opacity-0 transition-all ease-out duration-500 delay-150"
          }`}
        />
      </div>
    </>
  );
}

export default Content2;
