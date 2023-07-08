import React from 'react';
import { Hero } from '../../HeroBanner';

interface props {
  windowSize: number;
}

export const Home = ({windowSize}: props): JSX.Element => {
  return (
    <section className="home">
      <Hero windowSize={windowSize} />
    </section>
  );
}
