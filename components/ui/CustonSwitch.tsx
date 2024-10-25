import {useState} from 'react';

const CustomSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div
      className={`flex items-center relative w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 border-2 border-white ${
        isOn ? 'bg-black' : 'bg-white'
      }`}
      onClick={toggleSwitch}>
      <div
        className={`absolute w-6 h-6 rounded-full bg-[#6B5C39] transition-transform duration-300 ${
          isOn ? 'translate-x-8' : 'translate-x-0'
        }`}
      />
    </div>
  );
};

export default CustomSwitch;
