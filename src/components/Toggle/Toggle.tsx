import React, { useState } from 'react';
import './Toggle.scss';

interface props {
  dataOff: string;
  dataOn: string;
  name: string;
  theme: boolean;
}

export const Toggle = ({ dataOff, dataOn, name, theme }: props) => {
  const [isActive, setIsActive] = useState(theme);

  // Tells input if it is meant to be checked or not
  const setActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="icon">
      <label>
        <input
          className="check"
          checked={isActive}
          type="checkbox"
          onChange={setActive}
        />
        <div className={`icon-${name}`} onClick={setActive}>
          {isActive ? <img src={dataOff} /> : <img src={dataOn} />}
        </div>
      </label>
    </div>
  );
};
