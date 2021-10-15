import React, { Component } from 'react';
import './Hero.scss';

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
