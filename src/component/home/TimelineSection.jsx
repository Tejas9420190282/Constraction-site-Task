// TimelineSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopHouse } from "react-icons/fa";
import { TbBrandBinance } from 'react-icons/tb';
import { FaPinterest } from 'react-icons/fa';
import { SiMarketo } from 'react-icons/si';

const timelineData = [
    {
        id: 1,
        title: "Foundation & Vision",
        icon: <FaLaptopHouse className="w-6 h-6 text-cyan-400" />,
        points: [
            "Market & competitor research",
            "Target audience definition",
            "Pricing strategy development",
        ],
        image: "/images/vision.jpg",
    },
    {
        id: 2,
        title: "Brand Building & Digital Setup",
        icon: <TbBrandBinance className="w-6 h-6 text-green-400" />,
        points: [
            "Website design & development",
            "SEO strategy",
            "Social media account setup",
            "Content marketing plan",
        ],
        image: "/images/digita_setu.jpg",
    },
    {
        id: 3,
        title: "Soft Launch & Interest Generation",
        icon: <FaPinterest className="w-6 h-6 text-yellow-400" />,
        points: [
            "Expression of Interest campaigns",
            "Influencer partnerships & referrals",
            "Launch of 3D walkthroughs",
        ],
        image: "/images/interest-generation.png",
    },
    {
        id: 4,
        title: "Marketing Intensification",
        icon: <SiMarketo className="w-6 h-6 text-pink-400" />,
        points: ["Ads & email campaigns", "WhatsApp automation setup"],
        image: "/images/marketting.jpg",
    },
];

const TimelineSection = () => {
    return (
        <div className="relative flex flex-col items-center px-4 py-20 bg-gray-900 text-white">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-500 z-0" />

            <div className="flex flex-col gap-24 max-w-6xl z-10">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center relative"
                    >
                        {/* Left Section - Text */}
                        <div className="md:w-1/2 p-6 text-left">
                            <div className="flex items-center gap-2 mb-4">
                                {item.icon}
                                <h3 className="text-xl font-bold">
                                    {item.title}
                                </h3>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 w-6 h-6 rounded-full border-4 border-white z-20 shadow-md" />

                        {/* Right Section - Image */}
                        <div className="md:w-1/4 p-6">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TimelineSection;
