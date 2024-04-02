import React, { useState } from 'react';

const VerticalTabs = ({ tabList, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
    onTabClick(id); // Pass the selected tab ID to the parent component
  };

  return (
    <div>
      {tabList.map((tab) => (
        <div
          key={tab.id}
          className={`p-2 hover:cursor-default ${activeTab === tab.id ? 'bg-[#e4f1fa] border-[#1840bd] border-l-4 text-[#1840bd] font-bold' : 'font-medium'}`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default VerticalTabs;
