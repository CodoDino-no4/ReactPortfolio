import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Contact from './components/Pages/Contact/Contact';
// import NotFound from './components/Pages/404/NotFound';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact component={Home} />
            <Route exact component={About} />
            <Route exact component={Projects} />
            <Route exact component={Contact} />
            {/* <Route path="/404" exact component={NotFound} /> */}
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
