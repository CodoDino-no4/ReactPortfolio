import React, { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-scroll';
import NavHoverLeft from './SVG/NavHover-left';
import NavHoverRight from './SVG/NavHover-right';
import Toggle from '../Toggle/Toggle';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobMenuOpen: false,
      navbarOffset: -80
    };

    this._toggleMobMenu = this._toggleMobMenu.bind(this);
    this._closeMobMenu = this._closeMobMenu.bind(this);
  }

  _toggleMobMenu = () => {
    this.setState({
      isMobMenuOpen: !this.state.isMobMenuOpen
    });
  };

  _closeMobMenu = () => {
    this.setState({
      isMobMenuOpen: false
    });
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="menu-icon" onClick={this._toggleMobMenu}>
              <i className={'burger fas fa-bars'} />
            </div>
            <ul className={this.state.isMobMenuOpen ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <div className="animation">
                  <NavHoverRight style={this.state.isMobMenuOpen ? { display: 'none' } : {}} />
                  <NavHoverLeft style={this.state.isMobMenuOpen ? { display: 'none' } : {}} />
                </div>
                <Link
                  to="home"
                  className="nav-links"
                  onClick={this._closeMobMenu}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  isDynamic={true}
                  offset={this.state.navbarOffset}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <div className="animation">
                  <NavHoverRight style={this.state.isMobMenuOpen ? { display: 'none' } : {}} />
                  <NavHoverLeft style={this.state.isMobMenuOpen ? { display: 'none' } : {}} />
                </div>
                <Link
                  to="about"
                  className="nav-links"
                  onClick={this._closeMobMenu}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  isDynamic={true}
                  offset={this.state.navbarOffset}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <div className="animation">
                  <NavHoverRight style={this.state.isMobMenuOpen ? { display: 'none' } : {}} />
                  <NavHoverLeft style={this.state.isMobMenuOpen ? { display: 'none' } : {}} />
                </div>
                <Link
                  to="projects"
                  className="nav-links"
                  onClick={this._closeMobMenu}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  isDynamic={true}
                  offset={this.state.navbarOffset}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <div className="animation">
                  <NavHoverRight style={this.state.isMobMenuOpen ? { display: 'none' } : {}} />
                  <NavHoverLeft style={this.state.isMobMenuOpen ? { display: 'none' } : {}} />
                </div>
                <Link
                  to="contact"
                  className="nav-links"
                  onClick={this._closeMobMenu}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  isDynamic={true}
                  offset={this.state.navbarOffset}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            <Link
              to="home"
              className="navbar-logo"
              onClick={this._closeMobMenu}
              spy={true}
              smooth={true}
              duration={1000}
              isDynamic={true}
              offset={this.state.navbarOffset}
            >
              ALICE
              <i className="fas fa-ghost" />
            </Link>
            <Toggle Name='dark-toggle' />
          </div>
        </nav>
      </>
    );
  }
}
