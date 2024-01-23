import React, { useState } from 'react';
import './toggle-switch.styles.scss';

interface ToggleSwitchProps {
  firstLabel: string;
  secondLabel: string;
  onToggle: (selectedOption: string) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ firstLabel, secondLabel, onToggle }) => {
  const [selectedOption, setSelectedOption] = useState<string>(firstLabel);

  const handleToggle = (option: string) => {
    setSelectedOption(option);
    onToggle(option);
  };

  return (
    <div className="toggle-switch">
      <button
        type="button"
        className={`option-button ${selectedOption === firstLabel ? 'active' : ''}`}
        onClick={() => handleToggle(firstLabel)}
      >
        {firstLabel}
      </button>
      <button
        type="button"
        className={`option-button ${selectedOption === secondLabel ? 'active' : ''}`}
        onClick={() => handleToggle(secondLabel)}
      >
        {secondLabel}
      </button>
    </div>
  );
};

export default ToggleSwitch;
