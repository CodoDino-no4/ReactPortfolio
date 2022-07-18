import React, { Component } from 'react';
import CardItem from './CardItem';
import './Projects.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getAllCards = () => {
    //loop thorugh list pof cards
    //add all cards to list
  };

  render() {
    return (
      <>
        <section className="projects">
          <h1>PROJECTS</h1>
          <div className="projects-container">
            <div className="cards">
              <div className="cards-items">
                <CardItem />
                <CardItem />
              </div>
              <div className="cards-items">
                <CardItem />
                <CardItem />
                <CardItem />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
