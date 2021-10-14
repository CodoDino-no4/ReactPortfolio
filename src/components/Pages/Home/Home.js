import React, { Component } from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Hero from '../../HeroBanner/Hero';

// useEffect(() => {
//   let url = window.location.href.split("/");
//   let target = url[url.length - 1].toLowerCase();
//   let element = document.getElementById(target);
//   element && element.scrollIntoView({ behavior: "smooth", block: "start" });
// }, []);

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
