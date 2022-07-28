import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <>
      <Outlet />
      <section className="blog">
        <h1>BLOG</h1>
        </section>
      </>
    );
  }
}

export default Home;
