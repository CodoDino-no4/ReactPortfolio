import React, { Component } from 'react';
import '../../../App.scss';
import Cards from './Cards/Cards';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p>this is projects</p>
        <Cards />
      </>
    );
  }
}
