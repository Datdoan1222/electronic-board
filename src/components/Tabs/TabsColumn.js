import React, { useState } from "react";
import "./TabsColumn.scss";

const TabsColumn = ({ tabs, onChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index, tabKey) => {
    setActiveTab(index);
    onChange(tabKey); // Call the onChange function with tabKey
  };

  return (
    <div
      className="tabscolumn-container"
    //   onClick={() => handleTabClick("thuvien")}
    >
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tabscolumn-item ${index === activeTab ? "active" : ""}`}
          //   onClick={() => handleTabClick(index, tab.tabKey)}
        >
          {tab.icon && <span className="tabscolumn-icon">{tab.icon}</span>}
          <span className="tabscolumn-label">{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TabsColumn;
