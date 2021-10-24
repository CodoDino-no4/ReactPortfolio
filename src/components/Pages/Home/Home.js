import React, { Component } from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Hero from '../../HeroBanner/Hero';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </>
    );
  }
}
