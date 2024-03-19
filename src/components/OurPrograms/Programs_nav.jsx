import React from "react";
import { Link } from "react-router-dom";

function Programs_nav() {
  return (
    <div>
      <div className=" bg-yellow-300 h-screen fixed pt-[2rem] px-[1.5rem] text-center font-primary text-gray-500">
        <Link to="/programs">
          <p className="text-[3rem]">Our Programs</p>
        </Link>
        <Link to="/programs/training">
          <p className="text-[1.25rem] pt-4">Training programs</p>
        </Link>
        <Link to="/programs/workshop">
          <p className="text-[1.25rem] pt-4">Online Workshops</p>
        </Link>
        <Link to="/programs/workout">
          <p className="text-[1.25rem] pt-4">Workout Plan</p>
        </Link>
        <Link to="/programs/diet">
          <p className="text-[1.25rem] pt-4">Diet Plan</p>
        </Link>
      </div>
    </div>
  );
}

export default Programs_nav;
