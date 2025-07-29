
// Background_Video.jsx

import React, { useState } from "react";

function Background_Video() {
  const [selectedVideo, setSelectedVideo] = useState("/background.mp4");

  const videos = {
    default: "/background.mp4",
    virtual: `https://drive.google.com/file/d/10B4B5t4Xr0UTu2iXEUpiyfTmKnGL6ueC/view`, // 🔁 Host your own .mp4
  };

  const handleBrochureClick = () => {
    window.open("https://somerset.archvox.studio/", "_blank");
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ✅ Background Video */}
      <video
        key={selectedVideo}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={selectedVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* ✅ Buttons */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center space-y-6 mt-70 ">
        
        <div className="flex space-x-4 flex-row gap-10">
          <button
            onClick={() => setSelectedVideo(videos.virtual)}
            className="bg-white/10 backdrop-blur-md hover:bg-blue-600 hover:text-white text-white border border-white px-6 py-3 rounded-full transition shadow-lg"
          >
            View Virtual
          </button>

          <button
            onClick={handleBrochureClick}
            className="bg-white/10 backdrop-blur-md hover:bg-green-600 hover:text-white text-white border border-white px-6 py-3 rounded-full transition shadow-lg"
          >
            Digital Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

export default Background_Video;

/* 
import React, { useState } from "react";

function Background_Video() {
  const [selectedVideo, setSelectedVideo] = useState("/background.mp4");

  const videos = {
    default: "/background.mp4",
    virtual: "https://drive.google.com/file/d/10B4B5t4Xr0UTu2iXEUpiyfTmKnGL6ueC/view?usp=drivesdk", // Replace with actual video path
    brochure: "https://somerset.archvox.studio/", // Replace with actual video path
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      // 🎥 Dynamic Background Video 
      <video
        key={selectedVideo}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={selectedVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      // 🔳 Overlay 
      <div className="absolute inset-0 bg-black/50 z-10" />

      //📝 Interactive Options 
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 mt-70 text-center space-y-6">
        
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedVideo(videos.virtual)}
            className="bg-white/10 backdrop-blur-md hover:bg-blue-600 hover:text-white text-white border border-white px-6 py-3 rounded-full transition shadow-lg"
          >
            View Virtual
          </button>

          <button
            onClick={() => setSelectedVideo(videos.brochure)}
            className="bg-white/10 backdrop-blur-md hover:bg-green-600 hover:text-white text-white border border-white px-6 py-3 rounded-full transition shadow-lg"
          >
            Digital Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

export default Background_Video;
 */

/* 
import React from "react";

function Background_Video() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" src="/background.mp4" autoPlay loop muted playsInline />
      <div className="absolute inset-0 bg-black/40 z-10" />
      
    </section>
  );
}

export default Background_Video;
 */


/*  
    /public
        └── background.mp4 
*/