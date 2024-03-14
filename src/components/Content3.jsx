import React from "react";
import { useInView } from "react-intersection-observer";

function Content3() {
  const { ref, inView } = useInView();
  const { ref: ref1 } = useInView();
  const { ref: ref2 } = useInView();
  const { ref: ref3 } = useInView();
  const { ref: ref4 } = useInView();

  return (
    <>
      <div className="grid grid-cols-3 mt-[6rem] mx-[6rem] font-primary text-gray-500">
        <div
          ref={ref}
          className={`col-span-1 font-bold text-[5rem] -translate-x-20 opacity-0 max-w-[] ${
            inView
              ? "translate-x-0 opacity-100  transition-all ease-in-out duration-500 delay-300"
              : ""
          }`}
        >
          Explore <br />
          our <br /> programs
          {inView ? console.log("affirmative") : console.log("negative")}
          <button
            type="button"
            className="text-xl px-6 py-3 border-2 border-white text-white hover:bg-yellow-400 hover:text-gray-500 hover:translate-x-5 hover:transition-all ease-in-out duration-300"
          >
            Discover more
          </button>
        </div>
        <div className="col-span-2 text-[3rem]">
          <div className="grid grid-cols-2 gap-10">
            <div
              ref={ref1}
              className={`${
                inView
                  ? "opacity-100 transition-all ease-in-out duration-500 delay-[800ms]"
                  : "opacity-0"
              }`}
            >
              Training programs
              <p className="text-[1.25rem]">
                Our training programs are throughly reviewed by fitness experts
                and trainers to ensure effectiveness, safety, and
                sustainability. Each program is structured to target specific
                aspect of fitness, including strength, endurance, flexibility,
                weight loss, muscle building, and more.
              </p>
            </div>
            <div
              ref={ref2}
              className={`${
                inView
                  ? "opacity-100 transition-all ease-in-out duration-500 delay-[1300ms]"
                  : "opacity-0"
              }`}
            >
              Online workshops
              <p className="text-[1.25rem]">
                For those who have limited time or who are lazy, we also offer
                online workshops and webinars featuring experts in fitness,
                nutrition, and mental health to provide valuable information,
                practical tips and interactive sessions.
              </p>
            </div>
            <div
              ref={ref3}
              className={`${
                inView
                  ? "opacity-100 transition-all ease-in-out duration-500 delay-[1800ms]"
                  : "opacity-0"
              }`}
            >
              Workout plan
              <p className="text-[1.25rem]">
                Workout plan in there to help you create your perfect workout
                routine according to your available time and personal
                requirements.
              </p>
            </div>
            <div
              ref={ref4}
              className={`${
                inView
                  ? "opacity-100 transition-all ease-in-out duration-500 delay-[2300ms]"
                  : "opacity-0"
              }`}
            >
              Diet plan
              <p className="text-[1.25rem]">
                Whether you are trying to build muscle, lose weight, or gain
                strength, we provide dedicated diet plans with all the necessary
                nutrition for you to reach your goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content3;
