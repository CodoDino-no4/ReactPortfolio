import React, { Component } from 'react';
import '../../../App.scss';
import Cards from './Cards/Cards';
import './Projects.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="projects">
          <h1>PROJECTS</h1>
          <Cards />
        </section>
      </>
    );
  }
}
