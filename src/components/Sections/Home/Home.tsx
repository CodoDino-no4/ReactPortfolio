import React, { Fragment } from 'react';
import { Hero } from '../../HeroBanner';
import { About } from '../About';
import { Projects } from '../Projects';
import { Contact } from '../Contact';

interface props {
  windowSize: number;
  isDark: boolean;
}

export const Home = ({ windowSize, isDark }: props): JSX.Element => {
  return (
    <Fragment>
      <section id="home">
        <Hero windowSize={windowSize} isDark={isDark} />
      </section>
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
};
