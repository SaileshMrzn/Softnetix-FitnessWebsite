import React from "react";
import Programs_nav from "./Programs_nav";
import Footer from "../Footer";

function WorkoutPlan() {
  return (
    <div className="grid grid-cols-4">
      <div className="grid-cols-1">
        <Programs_nav />
      </div>
      <div className="col-span-3 pt-[3rem] px-[2.5rem] font-primary text-[1.1rem] bg-gray-900">
        <header class="bg-gray-800 text-white py-4">
          <h1 class="text-3xl font-bold text-center">Workout Plan</h1>
        </header>
        <div class="container mx-auto py-8 px-4">
          <p class="text-lg leading-relaxed mb-4">
            Our workout plans are meticulously designed to help you achieve your
            fitness goals efficiently and effectively. Whether you're looking to
            lose weight, build muscle, or improve overall health, we have a plan
            tailored to suit your needs. Our plans include:
          </p>
          <ul class="list-disc list-inside mb-4">
            <li>
              Full-body workouts for comprehensive training targeting all major
              muscle groups.
            </li>
            <li>
              Specialized plans focusing on specific areas such as abs, arms,
              legs, or back.
            </li>
            <li>
              High-intensity interval training (HIIT) routines for maximum
              calorie burn and cardiovascular benefits.
            </li>
            <li>
              Progressive strength training programs to gradually increase
              strength and muscle mass.
            </li>
            <li>
              Flexible schedules adaptable to your lifestyle, whether you prefer
              home workouts or gym sessions.
            </li>
            <li>
              Video tutorials and detailed instructions to ensure proper form
              and technique.
            </li>
          </ul>
          <p class="text-lg leading-relaxed mb-4">
            With our workout plans, you'll stay motivated, challenged, and on
            track to reach your fitness aspirations. Start your journey today
            and experience the transformative power of our personalized workout
            programs!
          </p>
          <img
            class="mx-auto rounded-lg mt-8 shadow-lg"
            src="https://images.pexels.com/photos/6740171/pexels-photo-6740171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Diet Plans Image"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default WorkoutPlan;
