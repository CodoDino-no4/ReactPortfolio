import React, { Component } from 'react';
import './Hero.scss';
import PlaceholderHero from './SVG/PlaceholderHero';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="hero-container">
        <PlaceholderHero />
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
}
