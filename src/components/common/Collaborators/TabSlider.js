import React, { useState } from 'react';

const TabSlider = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-slider">
      <div className="tab-slider-nav">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-slider-content">{children[activeTab]}</div>
    </div>
  );
};

export default TabSlider;
