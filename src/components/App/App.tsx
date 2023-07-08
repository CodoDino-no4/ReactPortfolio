import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { About } from '../Sections/About';
import { Contact } from '../Sections/Contact';
import { Home } from '../Sections/Home';
import { Projects } from '../Sections/Projects';

export const App = (props): JSX.Element => {
  return (
    <>
      <Outlet />
      <Home windowSize={props.windowSize} />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
