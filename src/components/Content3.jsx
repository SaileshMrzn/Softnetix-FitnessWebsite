import React from "react";

function Content3() {
  return (
    <>
      <div className="grid grid-cols-3 mt-[6rem] mx-[6rem] font-primary text-gray-500">
        <div className="col-span-1 font-bold text-[5rem]">
          Explore our programs
          <button
            type="button"
            className="text-xl px-6 py-3 border-2 border-white text-white hover:bg-yellow-400 hover:text-gray-500 hover:translate-x-5 hover:transition-all ease-in-out duration-300"
          >
            Discover more
          </button>
        </div>
        <div className="col-span-2 text-[3rem]">
          <div className="grid grid-cols-2 gap-10">
            <div>
              Training programs
              <p className="text-[1.25rem]">
                Our training programs are throughly reviewed by fitness experts
                and trainers to ensure effectiveness, safety, and
                sustainability. Each program is structured to target specific
                aspect of fitness, including strength, endurance, flexibility,
                weight loss, muscle building, and more.
              </p>
            </div>
            <div>
              Online workshops
              <p className="text-[1.25rem]">
                For those who have limited time or who are lazy, we also offer
                online workshops and webinars featuring experts in fitness,
                nutrition, and mental health to provide valuable information,
                practical tips and interactive sessions.
              </p>
            </div>
            <div>
              Workout plan
              <p className="text-[1.25rem]">
                Workout plan in there to help you create your perfect workout
                routine according to your available time and personal
                requirements.
              </p>
            </div>
            <div>
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
