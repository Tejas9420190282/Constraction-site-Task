
// LaunchTimeline.jsx

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRocket, FaChartLine, FaCheck, FaBullhorn } from 'react-icons/fa';

const PreLaunchTimeline = [
  {
    phase: 'Pre-Launch Phase',
    color: 'bg-blue-500',
    quarters: [
      {
        quarter: 'Q1 (12-9m)',
        items: ['Compliance', 'Market Research', 'Pricing'],
        visual: 'Animated flowchart, boardroom session',
        icon: <FaCheck />,
      },
      {
        quarter: 'Q2 (9-6m)',
        items: ['Website', 'Social Media', 'CRM'],
        visual: 'Device screens of property site, branded Instagram feed',
        icon: <FaRocket />,
      },
      {
        quarter: 'Q3 (6-3m)',
        items: ['EOI', 'Influencers', 'Early Bird Offers'],
        visual: 'EOI landing page, influencer post',
        icon: <FaBullhorn />,
      },
      {
        quarter: 'Q4 (3-0m)',
        items: ['Digital Ads', 'Pre-launch Events'],
        visual: 'Digital banners, 3D virtual tour portal',
        icon: <FaChartLine />,
      },
    ],
  },
];

const LaunchTimeline = () => {
  return (
    <div className="bg-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Launch Timeline</h2>
      <VerticalTimeline>
        {PreLaunchTimeline.map((section) =>
          section.quarters.map((item, index) => (
            <VerticalTimelineElement
              key={item.quarter}
              date={`${section.phase} - ${item.quarter}`}
              iconStyle={{
                background: index % 2 === 0 ? '#2563eb' : '#10b981',
                color: '#fff',
              }}
              icon={item.icon}
              contentStyle={{ boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
            >
              <h3 className="text-xl font-semibold">{item.quarter}</h3>
              <ul className="list-disc list-inside text-sm mt-2">
                {item.items.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="text-xs italic text-gray-500 mt-2">Visual: {item.visual}</p>
            </VerticalTimelineElement>
          ))
        )}
      </VerticalTimeline>
    </div>
  );
};

export default LaunchTimeline;
