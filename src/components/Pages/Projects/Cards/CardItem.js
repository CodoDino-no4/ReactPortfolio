import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cards.scss';
import placeholder from '../../../../images/img-1.jpg';
// import Cards from './Cards'

export default class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: 'www.google.com',
      language: 'css',
      src: placeholder,
      text: 'blah blah'
    };
  }

  render() {
    return (
      <>
        <div>
          <li className="cards-item">
            <Link className="cards-item-link" to={this.state.path}>
              <figure
                className="cards-item-pic-wrap"
                data-category={this.state.language}
              >
                <img
                  src={this.state.src}
                  alt="Software"
                  className="cards-item-img"
                />
              </figure>
              <div className="cards-item-info">
                <h5 className="cards-item-text">{this.state.text}</h5>
              </div>
            </Link>
          </li>
        </div>
      </>
    );
  }
}
