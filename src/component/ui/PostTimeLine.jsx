

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

// PostTimeLine Component
export const PostTimeLine = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    }, [ref]);
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start 10%", "end 50%"],
    });
  
    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  
    return (
      <div
        className="w-full bg-white dark:bg-neutral-800 font-sans md:px-10"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
            Exam Pre-Launch to Launch
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Powering Every Digital Milestone in Real Estate
          </p>
        </div>
  
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white text-center">
            Pre-Launch Phase (Q1-Q4)
        </h2>
  
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-18 absolute left-3 md:left-3 w-18 rounded-full bg-white dark:bg-black flex items-center justify-center">
                   
                  <div className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2">
                    <p className="text-white font-bold text-center mx-50% my-50%">Q{index+1}</p>
                  </div>  
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 ml-10 dark:text-neutral-500">
                  {item.title} 
                </h3>
              </div>
  
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4  text-left font-bold text-neutral-500 dark:text-neutral-500 ml-10">
                  {item.title}
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-xl p-6 rounded-xl transition duration-300 hover:shadow-purple-300 dark:hover:shadow-purple-900 md:mr-18"
                >
                  {item.content}
                </motion.div>
              </div>
            </div>
          ))}
  
          <div 
            style={{ height: height + "px" }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          > 
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    );
};
