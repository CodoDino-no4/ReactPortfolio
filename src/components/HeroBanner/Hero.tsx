import React from 'react';
import './Hero.scss';
import HeroImg from './SVG/HeroSVG';

interface props {
  windowSize: number;
}

export const Hero = ({windowSize}: props): JSX.Element => {
  return (
    <div className="hero-container">
      <HeroImg windowSize={windowSize}/>
      <div className="forground-text">
        <h1>
          ALICE
          <br />
          CHAMBERS
        </h1>
      </div>
    </div>
  );
};
