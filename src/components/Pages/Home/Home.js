import React, { Component } from 'react';
import Hero from '../../HeroBanner/Hero';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="home">
        <Hero />
      </section>
    );
  }
}
