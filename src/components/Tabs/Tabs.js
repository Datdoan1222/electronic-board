import React, { useState } from "react";
import "./Tabs.scss";

const Tabs = ({ children, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs-nav">
        {React.Children.map(children, (tab, index) => (
          <div
            key={index}
            className={`tab-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.props.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.map(children, (tab, index) => (
          <div
            key={index}
            className={`tab-pane ${index === activeIndex ? "active" : ""}`}
          >
            {tab.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
