
// Loader.jsx
import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="viewr-title">
        {"VIEWr".split("").map((char, index) => (
          <span key={index} className="viewr-letter" style={{ animationDelay: `${index * 0.2}s` }}>
            {char}
          </span>
        ))}
      </div>
      <p className="viewr-subtitle">Real Estate Solutions</p>
    </div>
  );
};

export default Loader;
