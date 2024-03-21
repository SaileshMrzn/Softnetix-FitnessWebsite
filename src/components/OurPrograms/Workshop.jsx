import React from "react";
import Programs_nav from "./Programs_nav";
import Footer from "../Footer";

function Workshop() {
  return (
    <div className="grid grid-cols-4">
      <div className="grid-cols-1">
        <Programs_nav />
      </div>
      <div className="col-span-3 pt-[3rem] px-[2.5rem] font-primary text-[1.1rem] bg-gray-900">
        <header class="bg-gray-800 text-white py-4">
          <h1 class="text-3xl font-bold text-center">Online Workshops</h1>
        </header>
        <div class="container mx-auto py-8 px-4">
          <p class="text-lg leading-relaxed mb-4">
            Our online workshops offer a convenient and accessible way to
            enhance your fitness knowledge and skills from the comfort of your
            home. Led by experienced instructors and industry experts, these
            workshops cover a wide range of topics, including:
          </p>
          <ul class="list-disc list-inside mb-4">
            <li>
              Nutrition fundamentals for optimizing performance and health.
            </li>
            <li>
              Effective workout routines for various fitness goals and levels.
            </li>
            <li>
              Mindfulness and stress management techniques for holistic
              well-being.
            </li>
            <li>
              In-depth discussions on fitness myths, trends, and evidence-based
              practices.
            </li>
            <li>
              Specialized workshops on yoga, Pilates, martial arts, and more.
            </li>
            <li>
              Interactive Q&A sessions and practical demonstrations for hands-on
              learning.
            </li>
          </ul>
          <p class="text-lg leading-relaxed mb-4">
            Whether you're a fitness enthusiast, professional trainer, or
            someone looking to learn more about leading a healthy lifestyle, our
            online workshops provide valuable insights and resources to support
            your journey towards wellness.
          </p>
          <img
            className="mx-auto rounded-lg mt-8 shadow-lg"
            src="https://images.pexels.com/photos/7530005/pexels-photo-7530005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Diet Plans Image"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Workshop;
