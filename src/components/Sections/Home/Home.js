import React from 'react';
import Hero from '../../HeroBanner/Hero';

function Home(props) {
  return (
    <section className="home">
      <Hero windowSize={props.windowSize} />
    </section>
  )
}

export default Home