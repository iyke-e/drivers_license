import React, { useState } from 'react';

const SlidableToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <div
        className={`shrink-0 relative w-14 h-8 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 ${
          isOn ? 'bg-[#22D665]' : 'bg-gray-300'
        }`}
        onClick={toggleSwitch}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </div>
      <span className="ml-5 font-normal text-base text-[#232323] text-wrap">
      Enable or disable two factor authentication
      </span>
    </div>
  );
};

export default SlidableToggle;
