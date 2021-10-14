import React from 'react';
import CardItem from './CardItem';
import './Cards.scss';
import placeholder from '../../../../images/img-1.jpg';
//in a database preferably
function Cards() {
  return (
    <>
      <h1>PROJECTS</h1>
      <div className="cards">
        <div className="cards-container">
          <div className="cards-wrapper">
            <ul className="cards-items">
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
            </ul>
            <ul className="cards-items">
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
