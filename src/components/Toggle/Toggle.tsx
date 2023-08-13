import React, { useState } from 'react';
import './Toggle.scss';

interface props {
  dataOff: string;
  dataOn: string;
  name: string;
  checked: boolean;
}

export const Toggle = ({ dataOff, dataOn, name, checked }: props) => {
  const [isActive, setIsActive] = useState(checked);

  // Tells input if it is meant to be checked or not
  const setActive = () => {
    setIsActive(isActive === true ? false : true);
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
        <div className={`icon-${name}`}>
          {isActive ? <img src={dataOff} /> : <img src={dataOn} />}
        </div>
      </label>
    </div>
  );
};
