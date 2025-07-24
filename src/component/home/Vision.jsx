/* import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.avif";
 */
/* import icon1 from "../assets/icons/render.svg";
import icon2 from "../assets/icons/drone.svg";
import icon3 from "../assets/icons/virtual.svg";
import icon4 from "../assets/icons/walkthrough.svg";
import icon5 from "../assets/icons/campaign.svg";
 */

// Vision.jsx
import React from "react";
import { GiDeliveryDrone } from 'react-icons/gi';
import { MdOutline3dRotation } from 'react-icons/md';
import { TbView360Number } from 'react-icons/tb';
import { FaVideo } from 'react-icons/fa6';
import { SiGooglecampaignmanager360 } from 'react-icons/si';

const Vision = () => {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  ];

  const services = [
    { icon: MdOutline3dRotation, label: "3D Renders" },
    { icon: GiDeliveryDrone, label: "Drone Shoots" },
    { icon: TbView360Number, label: "360° Virtual Tours" },
    { icon: FaVideo, label: "Walkthrough Videos" },
    { icon: SiGooglecampaignmanager360, label: "Digital Campaigns" },
  ];

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden mt-10">
      {/* 🔲 Background Image Grid */}
      <div className="absolute inset-0 z-0 grid grid-rows-2 gap-0">
        <div className="flex w-full h-full">
          {backgroundImages.slice(0, 2).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`top-bg-${i}`}
              className="w-1/2 h-full object-cover"
            />
          ))}
        </div>
        <div className="flex w-full h-full">
          {backgroundImages.slice(2, 5).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`bottom-bg-${i}`}
              className="w-1/3 h-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 🔲 Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            From Vision to Virtual
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light">
            Experts in Real Estate Pre-Launch
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-light">
            Launch Marketing
          </p>
          <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            We bring projects to life before a single brick is laid.
          </p>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition duration-300">
            See The Marketing Timeline
          </button>

          {/* 🔲 Service Icons */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {services.map(({ icon: Icon, label }, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <Icon className="text-white text-3xl sm:text-4xl" />
                <p className="text-sm sm:text-base">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
