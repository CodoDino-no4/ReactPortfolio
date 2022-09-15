import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import About from './components/Sections/About/About';
import Contact from './components/Sections/Contact/Contact';
import Home from './components/Sections/Home/Home';
import Projects from './components/Sections/Projects/Projects';

function App(props) {

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

export default App;
