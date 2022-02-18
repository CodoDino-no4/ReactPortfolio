import React, { Component } from 'react';
import CardItem from './CardItem';
import './Cards.scss';
//in a database preferably

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}
