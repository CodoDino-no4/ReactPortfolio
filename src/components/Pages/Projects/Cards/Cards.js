import React, { Component } from 'react';
import CardItem from './CardItem';
import './Cards.scss';
import placeholder from '../../../../images/img-1.jpg';
//in a database preferably

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      text: '',
      language: '',
      path: '',
      colourCode: ''
    };
  }

  render() {
    return (
      <>
        <div className="cards">
          <div className="cards-items">
            <CardItem
              src={placeholder}
              text="CSS used to create a stunning contact form"
              language="CSS"
              path="/project1"
              colourCode="#1f98f4"
            />
            <CardItem
              src={placeholder}
              text="CSS used to create a stunning contact form"
              language="CSS"
              path="/project1"
              colourCode="#1f98f4"
            />
          </div>
          <div className="cards-items">
            <CardItem
              src={placeholder}
              text="CSS used to create a stunning contact form"
              language="CSS"
              path="/project1"
              colourCode="#1f98f4"
            />
            <CardItem
              src={placeholder}
              text="CSS used to create a stunning contact form"
              language="CSS"
              path="/project1"
              colourCode="#1f98f4"
            />
            <CardItem
              src={placeholder}
              text="CSS used to create a stunning contact form"
              language="CSS"
              path="/project1"
              colourCode="#1f98f4"
            />
          </div>
        </div>
      </>
    );
  }
}
