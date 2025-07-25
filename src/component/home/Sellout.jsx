
// Sellout.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    title: "Pre-Launch Phase",
    quarters: [
      {
        q: "Q1 (12-9m)",
        items: ["Compliance", "Market Research", "Pricing"],
        visual: "Animated flowchart, boardroom session",
      },
      {
        q: "Q2 (9-6m)",
        items: ["Website", "Social Media", "CRM"],
        visual: "Device screens of property site, branded Instagram feed",
      },
      {
        q: "Q3 (6-3m)",
        items: ["EOI", "Influencers", "Early Bird Offers"],
        visual: "EOI landing page, influencer post",
      },
      {
        q: "Q4 (3-0m)",
        items: ["Digital Ads", "Pre-launch Events"],
        visual: "Digital banners, 3D virtual tour portal",
      },
    ],
  },
  {
    title: "Post-Launch Phase",
    quarters: [
      {
        q: "Q1 (0-3m)",
        items: ["Launch Event", "Social Activation"],
        visual: "Footage of event, chatbot in action",
      },
      {
        q: "Q2 (3-6m)",
        items: ["Webinars", "Lead Nurture"],
        visual: "Screenshot of a 360° tour, webinar panel",
      },
      {
        q: "Q3 (6-9m)",
        items: ["Referrals", "Testimonials"],
        visual: "Happy new homeowners, testimonial video frame",
      },
      {
        q: "Q4 (9-12m)",
        items: ["Analytics", "Inventory Push"],
        visual: "Sales dashboard, celebratory team photo",
      },
    ],
  },
];

function Sellout() {
  const [selectedQuarter, setSelectedQuarter] = useState({ 0: 0, 1: 0 });

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-16 px-4 md:px-12 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Our Process: <span className="text-indigo-600">Step-by-Step to Sellout</span>
      </h2>

      {/* Side-by-side Phase Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {timelineData.map((phase, pIndex) => {
          const selectedQ = selectedQuarter[pIndex];
          const current = phase.quarters[selectedQ];

          return (
            <div
              key={phase.title}
              className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 md:p-8 transition duration-300 hover:shadow-2xl"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-center text-gray-900 mb-6 border-b pb-2">
                {phase.title}
              </h3>

              {/* Quarter Selector */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {phase.quarters.map((q, qIndex) => (
                  <button
                    key={q.q}
                    onClick={() =>
                      setSelectedQuarter((prev) => ({ ...prev, [pIndex]: qIndex }))
                    }
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                      selectedQuarter[pIndex] === qIndex
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    {q.q}
                  </button>
                ))}
              </div>

              {/* Timeline Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.q}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-4"
                >
                  <div className="text-lg font-semibold text-gray-800">
                    {current.q}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    {current.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 mt-4">
                    <p className="text-sm italic text-indigo-700">
                      {current.visual}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      [Illustration Placeholder]
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Sellout;
