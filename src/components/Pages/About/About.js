import React, { Component } from 'react';
import './About.scss';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="about">
        <h1>ABOUT</h1>
        <div className="inner-rect">
          <div className="circle-image-me"></div>
        </div>
      </section>
    );
  }
}
