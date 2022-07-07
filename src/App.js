import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Sections/Home/Home';
import About from './components/Sections/About/About';
import Projects from './components/Sections/Projects/Projects';
import Contact from './components/Sections/Contact/Contact';
import RedirectPage from './components/Redirect/Redirect';
// import NotFound from './components/Pages/404/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Routes>
          <Route path="/external-link" element={<RedirectPage />} />
        </Routes>
      </Router>
    );
  }
}

export default hot(App);
