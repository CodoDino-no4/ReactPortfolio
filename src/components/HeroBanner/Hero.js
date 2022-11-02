import React from 'react';
import './Hero.scss';
import HeroImg from './SVG/HeroSVG';

function Hero(props) {
  return (
    <div className="hero-container">
      <HeroImg windowSize={props.windowSize} />
      <div className="forground-text">
        <h1>
          ALICE
          <br />
          CHAMBERS
        </h1>
      </div>
    </div>
  );
}

export default Hero;
