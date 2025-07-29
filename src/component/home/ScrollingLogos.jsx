
// ScrollingLogos.jsx

import React from "react";
import "./ScrollingLogos.css"; // ✅ Custom keyframes here

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
  "/logos/logo9.png",
  "/logos/logo10.png",
  "/logos/logo11.png",
  "/logos/logo12.png",
  "/logos/logo13.png",
  "/logos/logo14.png",
  "/logos/logo15.png",
  "/logos/logo16.png",
];

const ScrollingLogos = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 md:px-12 overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Trusted by 220+ Builders
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-logoScroll space-x-12 w-max">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingLogos;

