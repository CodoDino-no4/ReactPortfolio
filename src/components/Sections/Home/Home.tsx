import React, { Fragment } from 'react';
import { Hero } from '../../HeroBanner';
import { About } from '../About';
import { Projects } from '../Projects';
import { Contact } from '../Contact';

interface props {
  windowSize: number;
}

export const Home = ({ windowSize }: props): JSX.Element => {
  return (
    <Fragment>
      <section className="home">
        <Hero windowSize={windowSize} />
      </section>
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
};
