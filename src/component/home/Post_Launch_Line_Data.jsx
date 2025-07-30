
// Post_Launch_Line_Data.jsx



const Post_Launch_Line_Data = [
    {
        title: "Launch & Customer Acquisition",
        image: "/images/customer-acquisition.jpg", // Replace with actual image path
        content: (
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                <li>Grand launch event (physical or virtual)</li>
                <li>Social media marketing spike</li>
                <li>Chatbot & on-site interactivity</li>
                <li>Launch of 3D brochure</li>
            </ul>
        ),
    },
    {
        title: "Lead Engagement",
        image: "/images/lead-generation.jpg",
        content: (
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                <li>Virtual property tours + webinars</li>
                <li>Retargeting ads (custom audiences)</li>
                <li>FAQ bot enhancements</li>
            </ul>
        ),
    },
    {
        title: "Relationships & Referrals",
        image: "/images/relationship.png",
        content: (
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                <li>Collect & publish customer testimonials</li>
                <li>Launch referral program (trackable)</li>
                <li>Community building events</li>
            </ul>
        ),
    },
    {
        title: "Optimization & Growth",
        image: "/images/success.jpg",
        content: (
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                <li>Analyze performance metrics</li>
                <li>Lead conversion optimization</li>
                <li>Inventory clearance campaign</li>
                <li>Post-project documentation</li>
            </ul>
        ),
    },
];

export default Post_Launch_Line_Data;
 



/* 
import React from "react";

const data = [
  {
    id: "Q1",
    title: "FOUNDATION & VISION",
    points: [
      "Market & competitor research",
      "Target audience definition",
      "Pricing strategy development",
    ],
    image: "/images/launch1.jpg",
  },
  {
    id: "Q2",
    title: "BRAND BUILDING & DIGITAL SETUP",
    points: [
      "Website design & development",
      "SEO strategy",
      "Social media account setup",
      "Content marketing plan",
    ],
    image: "/images/launch2.jpg",
  },
  {
    id: "Q3",
    title: "SOFT LAUNCH & INTEREST GENERATION",
    points: [
      "Expression of Interest campaigns",
      "Influencer partnerships & referrals",
      "Launch of 3D walkthroughs",
    ],
    image: "/images/launch3.jpg",
  },
  {
    id: "Q4",
    title: "MARKETING INTENSIFICATION",
    points: [
      "Ads & email campaigns",
      "WhatsApp automation setup",
    ],
    image: "/images/launch4.jpg",
  },
];

export default function Post_Launch_Line_Data() {
  return (
    <div className="w-full bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pre-Launch Phase</h2>
      <div className="flex flex-col gap-20">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center justify-between ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            // Image Section 
            <div className="w-full md:w-1/2 px-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            // Text Section 
            <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
              <div className="bg-[#111827] border border-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full px-3 py-1 mr-3">
                    {item.id}
                  </span>
                  {item.title}
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 */