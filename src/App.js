import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import { hot } from "react-hot-loader";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Contact from './components/Pages/Contact/Contact';
// import NotFound from './components/Pages/404/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Router>
      </>
    );
  }
}

export default hot(module)(App);
