import React from 'react';

const StatCard = ({ title, value, icon, change, changeType }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${icon.bgColor}`}
        >
          {icon.component}
        </div>
      </div>
      <p className="text-2xl font-bold mb-2">{value}</p>
      <p
        className={`text-xs ${
          changeType === 'up' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {changeType === 'up' ? '↑' : '↓'} {change}
      </p>
    </div>
  );
};

export default StatCard;
