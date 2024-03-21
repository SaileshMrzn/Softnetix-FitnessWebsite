import React from "react";
import Programs_nav from "./Programs_nav";
import Footer from "../Footer";

function DietPlan() {
  return (
    <div className="grid grid-cols-4">
      <div className="grid-cols-1">
        <Programs_nav />
      </div>
      <div className="col-span-3 pt-[3rem] px-[2.5rem] font-primary text-[1.1rem] bg-gray-900">
        <header class="bg-gray-800 text-white py-4">
          <h1 class="text-3xl font-bold text-center">Diet Plan</h1>
        </header>
        <div class="container mx-auto py-8 px-4">
          <p class="text-lg leading-relaxed mb-4">
            Our diet plans are meticulously crafted by registered dietitians and
            nutritionists to help you achieve your health and fitness goals
            while enjoying delicious and nutritious meals. Each diet plan is
            tailored to suit different lifestyles, preferences, and dietary
            requirements, including:
          </p>
          <ul class="list-disc list-inside mb-4">
            <li>
              Keto diet plan for promoting fat loss and improving energy levels.
            </li>
            <li>
              Paleo diet plan focusing on whole foods and avoiding processed
              ingredients.
            </li>
            <li>
              Vegan and vegetarian meal plans for plant-based nutrition and
              ethical choices.
            </li>
            <li>
              Low-carb and high-protein meal plans for muscle building and
              weight management.
            </li>
            <li>
              Gluten-free and dairy-free options for individuals with specific
              dietary restrictions.
            </li>
            <li>
              Customizable meal plans with portion control and calorie tracking
              for personalized nutrition.
            </li>
          </ul>
          <p class="text-lg leading-relaxed mb-4">
            Whether you're aiming to lose weight, improve your athletic
            performance, or simply adopt a healthier lifestyle, our diet plans
            provide you with the guidance and support you need to make
            sustainable changes to your eating habits.
          </p>
          <img
            class="mx-auto rounded-lg mt-8 shadow-lg"
            src="https://images.pexels.com/photos/6740849/pexels-photo-6740849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Diet Plans Image"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DietPlan;
