
// ImmersiveTool.jsx
import React, { useState } from "react";

// Tab data
const tabData = {
  Website: {
    video: "/videos/website.mp4",
    heading: "Immersive Website Showcases",
    description: "Create stunning web-based platforms to showcase your properties in style.",
    stats: [
      { label: "Boost in Engagement", value: "350%" },
      { label: "Lead Conversion", value: "28%" },
    ],
  },
  Metaverse: {
    video: "/videos/metaverse.mp4",
    heading: "Step into the Metaverse",
    description: "Experience your properties in the metaverse, offering an immersive and engaging view.",
    stats: [
      { label: "Virtual Engagement", value: "500%" },
      { label: "Time on Page", value: "70%" },
    ],
  },
  "Sales Tool": {
    video: "/videos/sales-tool.mp4",
    heading: "Powerful Sales Tools",
    description: "Empower your sales team with interactive property presentation tools.",
    stats: [
      { label: "Sales Efficiency", value: "60%" },
      { label: "Closing Rate", value: "40%" },
    ],
  },
  "VR Solutions": {
    video: "/videos/vr-solutions.mp4",
    heading: "Virtual Reality Solutions",
    description: "Use VR to give immersive site tours and walkthroughs from anywhere.",
    stats: [
      { label: "Client Satisfaction", value: "90%" },
      { label: "Reduced Site Visits", value: "80%" },
    ],
  },
  "AR Solutions": {
    video: "/videos/ar-solutions.mp4",
    heading: "Augmented Reality Tools",
    description: "Bring projects to life in real-world settings using AR-powered mobile tools.",
    stats: [
      { label: "Interactive Experience", value: "75%" },
      { label: "Customer Recall", value: "85%" },
    ],
  },
};

const ImmersiveTool = () => {
  const [activeTab, setActiveTab] = useState("Website");

  const { video, heading, description, stats } = tabData[activeTab];

  return (
    <div className="bg-[#0c0c14] text-white py-20 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Transform how Industries Showcase Properties <br />
        with our all-in-one Immersive Tools
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === tab
                ? "bg-white text-black font-semibold shadow-lg"
                : "bg-[#1b1b24] text-white hover:bg-[#2b2b34]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Section */}
      <div className="bg-[#1b1b24] rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto transition-all duration-500">
        {/* Left - Video with double border */}
        <div className="w-full lg:w-1/2">
          <div className="p-0.5 bg-white rounded-2xl">
            <div className="p-5 bg-black rounded-2xl border-black overflow-hidden shadow-lg">
              <video
                key={video} // ensure video resets on change
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Right - Dynamic Text */}
        <div className="text-left lg:w-1/2 space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold">{heading}</h3>
          <p className="text-gray-300">{description}</p>
          <div className="flex gap-6">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            Know More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveTool;
