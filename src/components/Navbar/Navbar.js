import React, { Component } from 'react';
import { Link } from 'react-scroll';
import propTypes from 'prop-types';
import './Navbar.scss';
import NavHoverLeft from './SVG/NavHover-left';
import NavHoverRight from './SVG/NavHover-right';
import Toggle from '../Toggle/Toggle';
import DarkModeContent from '../../images/dark-mode.svg';
import LightModeContent from '../../images/light-mode.svg';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobMenuOpen: false,
      navbarOffset: -80
    };
  }

  toggleMobMenu = () => {
    this.setState({
      isMobMenuOpen: !this.state.isMobMenuOpen
    });
  };

  closeMobMenu = () => {
    this.setState({
      isMobMenuOpen: false
    });
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="menu-icon" onClick={this.toggleMobMenu}>
              <i className={'burger fas fa-bars'} />
            </div>
            <ul
              className={
                this.state.isMobMenuOpen ? 'nav-menu active' : 'nav-menu'
              }
            >
              <li className="nav-item">
                <div className="animation">
                  <NavHoverRight
                    style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  />
                  <NavHoverLeft
                    style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  />
                </div>
                <Link
                  to="home"
                  className="nav-links"
                  onClick={this.closeMobMenu}
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
                  <NavHoverRight
                    style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  />
                  <NavHoverLeft
                    style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  />
                </div>
                <Link
                  to="about"
                  className="nav-links"
                  onClick={this.closeMobMenu}
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
                  <NavHoverRight
                    style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  />
                  <NavHoverLeft
                    style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  />
                </div>
                <Link
                  to="projects"
                  className="nav-links"
                  onClick={this.closeMobMenu}
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
                  <NavHoverRight
                    style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  />
                  <NavHoverLeft
                    style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  />
                </div>
                <Link
                  to="contact"
                  className="nav-links"
                  onClick={this.closeMobMenu}
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
            <ul className="navbar-tools">
              <li className="tools-item">
                <Link
                  to="home"
                  className="navbar-logo"
                  onClick={this.closeMobMenu}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  isDynamic={true}
                  offset={this.state.navbarOffset}
                ></Link>
              </li>
              <li className="tools-item">
                <Toggle
                  name="theme"
                  dataOn={DarkModeContent}
                  dataOff={LightModeContent}
                  clickHandler={this.props.themeHandler}
                />
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
Navbar.propTypes = {
  themeHandler: propTypes.func.isRequired
};

export default Navbar;
