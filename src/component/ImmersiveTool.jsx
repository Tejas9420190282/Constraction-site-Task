// ImmersiveTool.jsx

import React from "react";

const ImmersiveTool = () => {
    return (
        <div className="bg-[#0c0c14] text-white py-20 px-6 md:px-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                Transform how Industries Showcase Properties <br />
                with our all-in-one Immersive Tools
            </h2>

            {/* Tabs (Optional — static for now) */}
            <div className="flex justify-center gap-4 flex-wrap mb-10">
                {[
                    "Website",
                    "Metaverse",
                    "Sales Tool",
                    "VR Solutions",
                    "AR Solutions",
                ].map((tab, i) => (
                    <button
                        key={i}
                        className={`px-6 py-2 rounded-full ${
                            tab === "Website"
                                ? "bg-white text-black"
                                : "bg-[#1b1b24] text-white hover:bg-[#2b2b34]"
                        } transition`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Main Content */}
            <div className="bg-[#1b1b24] rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
                {/* Left: Video */}
                {/* <div className="w-full lg:w-1/2 rounded-xl  overflow-hidden border-20 border-black shadow-lg">
          <video
            src="/videos/building-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div> */}

                <div className="w-full lg:w-1/2">
                    {/* Outer Black Border */}
                    <div className="p-0.5 bg-white rounded-2xl">
                        {/* Inner White Border */}
                        <div className="p-5 bg-black rounded-2xl border-black overflow-hidden shadow-lg">
                            <video
                                src="/videos/building-demo.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Text Info */}
                <div className="text-left lg:w-1/2 space-y-6">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                        Interactive Storytelling
                    </h3>
                    <p className="text-gray-300">
                        Interactive web-based platforms to visualize and explore
                        properties within a realistic virtual environment.
                    </p>
                    <div className="flex gap-6">
                        <div>
                            <p className="text-2xl font-bold">400%</p>
                            <p className="text-sm text-gray-400">
                                Boost in Engagement
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">30%</p>
                            <p className="text-sm text-gray-400">
                                Increase in Conversion
                            </p>
                        </div>
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

// /public/videos/building-demo.mp4
