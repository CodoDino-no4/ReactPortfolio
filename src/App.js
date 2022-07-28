import React from 'react';
import './App.scss';
import Home from './components/Sections/Home/Home';
import About from './components/Sections/About/About';
import Projects from './components/Sections/Projects/Projects';
import Contact from './components/Sections/Contact/Contact';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Outlet />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
