import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import CardItem from '../../components/Sections/Projects/CardItem';
import './Home.scss';

export class Home extends Component {
  render() {
    return (
      <>
      <Outlet />
      <section className="blog">
          <h1>BLOG</h1>
          <div className="cards-items">
            <CardItem />
          </div>
          <div className="cards-items">
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </section>
      </>
    );
  }
}

export default Home;
