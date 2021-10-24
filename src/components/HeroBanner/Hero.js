import React, { Component } from 'react';
import './Hero.scss';
// import placeholder_hero from './SVG/Placeholder_hero';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="hero-container">
        <h1>ALICE</h1>
      </div>
    );
  }
}
