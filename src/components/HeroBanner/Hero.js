import React, { Component } from 'react';
import './Hero.scss';
import video from '../../images/video-2.mp4';

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="hero-container">
        <video src={video} autoPlay loop muted />
        <h1>ALICE</h1>
      </div>
    );
  }
}
