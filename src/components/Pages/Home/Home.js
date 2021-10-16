import React, { Component } from 'react';
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
      <section className="home">
        <Hero />
      </section>
    );
  }
}
