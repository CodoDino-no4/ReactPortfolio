import React, { Fragment } from 'react';
import { Hero } from '../../HeroBanner';
import { About } from '../About';
import { Projects } from '../Projects';
import { Contact } from '../Contact';

interface props {
  windowSize: number;
}

export const Home = (): JSX.Element => {
  return (
    <Fragment>
      <section className="home">
        <Hero />
      </section>
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
};
