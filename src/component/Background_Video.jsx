
// Background_Video.jsx

import React from "react";

function Background_Video() {
    return (
        <>
            <section className="relative w-full h-screen overflow-hidden mx-5">
                {/* 🎥 Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/background.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* 🔳 Dark Blur Overlay */}
                <div className="absolute inset-0 bg-black/40  z-10" />

                {/* 📝 Text + Button Overlay */}
                <div className="relative z-20 flex flex-col justify-center items-start h-full px-8 md:px-20">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
                        Discover the future of Immersive 3D Experiences
                    </h1>
                    <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
                        Experiance in 3D →
                    </button>
                </div>
            </section>
        </>
    );
}

export default Background_Video;


/*  
    /public
        └── background.mp4 
*/