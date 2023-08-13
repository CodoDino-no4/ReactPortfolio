import React from 'react';
import { CardItem } from '../../CardItem';
import './Projects.scss';

export const Projects = () => {
  const getAllCards = () => {
    //loop thorugh list pof cards
    //add all cards to list
  };

  return (
    <>
      <section id="projects">
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
};
