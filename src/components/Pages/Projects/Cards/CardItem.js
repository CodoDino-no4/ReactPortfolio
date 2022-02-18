import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cards.scss';
import placeholder from '../../../../images/test.jpg';
// import Cards from "./Cards"

export default class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: 'www.google.com',
      language: 'css',
      src: placeholder,
      colourCode: '#1f98f4',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      alt: '',
    };
  }

  setLanguageColour() {
    this.setState({ colourCode: '#1f98f4' });
  }

  render() {
    return (
      <>
        <li className="cards-item">
          <Link className="cards-item-link" to={this.state.path}>
            <figure
              className="cards-item-pic-wrap"
              data-category={this.state.language}
            >
              <img
                src={this.state.src}
                alt={this.state.alt}
                className="cards-item-img"
              />
            </figure>
            <div className="cards-item-info">
              <p className="cards-item-text">{this.state.text}</p>
            </div>
          </Link>
        </li>
      </>
    );
  }
}
