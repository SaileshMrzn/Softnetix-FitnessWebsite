import React from "react";
import Programs_nav from "./Programs_nav";
import Footer from "../Footer";

function Training() {
  return (
    <div className="grid grid-cols-4">
      <div className="grid-cols-1">
        <Programs_nav />
      </div>
      <div className="col-span-3 pt-[3.75rem] px-[2.5rem] font-primary text-[1.1rem]">
        <header class="bg-gray-800 text-white py-4">
          <h1 class="text-3xl font-bold text-center">Training Programs</h1>
        </header>
        <div class="container mx-auto py-8 px-4">
          <p class="text-lg leading-relaxed mb-4">
            Our training programs are carefully crafted by certified fitness
            experts to help you achieve your fitness goals effectively and
            safely. Each program is designed to target specific aspects of
            fitness, including:
          </p>
          <ul class="list-disc list-inside mb-4">
            <li>
              Strength training for building muscle and increasing overall
              strength.
            </li>
            <li>
              Endurance training to improve cardiovascular health and stamina.
            </li>
            <li>
              Flexibility exercises to enhance range of motion and prevent
              injuries.
            </li>
            <li>
              Weight loss programs tailored to burn fat and improve body
              composition.
            </li>
            <li>
              Muscle building routines focusing on hypertrophy and muscle
              definition.
            </li>
            <li>
              Customized plans for functional fitness, sports-specific training,
              and more.
            </li>
          </ul>
          <p class="text-lg leading-relaxed mb-4">
            Whether you're a beginner looking to kickstart your fitness journey
            or an experienced athlete aiming to reach new heights, we have a
            program suitable for you. Get started today and unleash your full
            potential!
          </p>
          <img
            class="mx-auto mb-8 rounded-lg shadow-lg"
            src="https://via.placeholder.com/600x300"
            alt="Training Programs Image"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Training;
