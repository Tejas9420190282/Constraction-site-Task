

// ScrollingLogos.jsx

// ScrollingLogos.jsx
import React from "react";

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
    <div className="bg-white py-12 h-60 px-6 md:px-12 rounded-b-4xl overflow-hidden mx-5 ">
      <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-700 mb-8">
        Trusted by 220+ Builders
      </h2>

      <div className="relative overflow-hidden mt-10">
        <div className="flex w-max animate-scroll space-x-12">
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

