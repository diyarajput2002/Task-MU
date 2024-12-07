import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#3a6fa4] text-white">
      <div className="p-8 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <p className="text-lg mb-8">
          Welcome to BitesDigest! We are dedicated to bringing you the best in
          food tips, healthy eating habits, and quick & easy recipes. Whether
          you’re a beginner in the kitchen or a seasoned chef, our content is
          tailored to inspire and guide you toward delicious meals and a
          healthier lifestyle.
        </p>

        <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <img
              src="/images/beverage.webp"
              alt="Team Member 1"
              className="w-28 h-28 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Expert 1</h3>
            <p className="text-sm text-gray-300">Founder & Recipe Creator</p>
          </div>

          <div className="text-center">
            <img
              src="/images/coffee.webp"
              alt="Team Member 2"
              className="w-28 h-28 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Expert 2</h3>
            <p className="text-sm text-gray-300">Nutrition Expert</p>
          </div>

          <div className="text-center">
            <img
              src="/images/food.webp"
              alt="Team Member 3"
              className="w-28 h-28 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Expert 3</h3>
            <p className="text-sm text-gray-300">Content Writer</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg mb-4 text-gray-300">
            Want to collaborate with us?
          </p>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
