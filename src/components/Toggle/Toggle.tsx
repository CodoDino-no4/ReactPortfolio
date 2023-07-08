import React, { useState } from 'react';
import './Toggle.scss';

interface props {
  clickHandler: Function;
  dataOff: string;
  dataOn: string;
  name: string;
  theme: 
}
export const Toggle = ({clickHandler, dataOff, dataOn, name, theme}: props) => {
  const [isActive, setIsActive] = useState(this.props.theme);

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
            onChange={setIsActive}
          />
          <div
            className={`icon-${name}`}
            onClick={clickHandler}
          >
            {isActive ? (
              <img src={dataOff} />
            ) : (
              <img src={dataOn} />
            )}
          </div>
        </label>
      </div>
    );
}
