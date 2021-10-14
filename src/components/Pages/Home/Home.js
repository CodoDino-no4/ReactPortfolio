import React, { Component } from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p>this is home</p>
        <About />
        <Projects />
        <Contact />
      </>
    );
  }
}
