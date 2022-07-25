import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Navbar.scss';
import Underline from './SVG/Underline';
import Toggle from '../Toggle/Toggle';
import Button from '../Button/Button';
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
                <Underline
                  clickHandler={this.closeMobMenu}
                  offsetHandler={this.state.navbarOffset}
                  style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  linkWidth={'60'}
                  name="HOME"
                  link="home"
                />
              </li>
              <li className="nav-item">
                <Underline
                  clickHandler={this.closeMobMenu}
                  offsetHandler={this.state.navbarOffset}
                  style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  linkWidth={'60'}
                  name="ABOUT"
                  link="about"
                />
              </li>
              <li className="nav-item">
                <Underline
                  clickHandler={this.closeMobMenu}
                  offsetHandler={this.state.navbarOffset}
                  style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  linkWidth={'90'}
                  name="PROJECTS"
                  link="projects"
                />
              </li>
              <li className="nav-item">
                <Underline
                  clickHandler={this.closeMobMenu}
                  offsetHandler={this.state.navbarOffset}
                  style={this.state.isMobMenuOpen ? { display: 'none' } : {}}
                  linkWidth={'80'}
                  name="CONTACT"
                  link="contact"
                />
              </li>
            </ul>
            <ul className="navbar-tools">
              <li className="tools-item">
                <Button name="blog" />
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
