import React from 'react';
import './Hero.scss';
import HeroImg from './SVG/HeroSVG';

interface props {
  windowSize: number;
  isDark: boolean;
}

export const Hero = ({ windowSize, isDark }: props): JSX.Element => {
  return (
    <div className="hero-container">
      <HeroImg windowSize={windowSize} isDark={isDark} />
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
