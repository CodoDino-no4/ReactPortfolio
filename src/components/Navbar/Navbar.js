import React, { Component } from 'react';
import { Link } from 'react-scroll';
import propTypes from 'prop-types';
import './Navbar.scss';
import NavLink from './NavLink';
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

  isDark() { 
    if (this.props.theme === 'Dark') {
      return true;
    } else { 
      return false;
    }
  }

  renderNav = (name, width) => {
    if (this.state.isMobMenuOpen) {
      return (
        <Link
          to={name}
          className="nav-links"
          onClick={this.closeMobMenu}
          spy={true}
          smooth={true}
          duration={1000}
          isDynamic={true}
          offset={this.state.navbarOffset}
        >
          {name.toUpperCase()}
        </Link>
      );
    } else {
      return (
        <NavLink
          offsetHandler={this.state.navbarOffset}
          linkWidth={width}
          name={name}
        />
      );
    }
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
              <li className="nav-item">{this.renderNav('home', 70)}</li>
              <li className="nav-item">{this.renderNav('about', 75)}</li>
              <li className="nav-item">{this.renderNav('projects', 100)}</li>
              <li className="nav-item">{this.renderNav('contact', 90)}</li>
            </ul>
            <div className="navbar-tools">
              <li className="tools-item">
                <Button name="blog" />
              </li>
              <li className="tools-item">
                <Toggle
                  name="theme"
                  dataOn={DarkModeContent}
                  dataOff={LightModeContent}
                  clickHandler={this.props.themeHandler}
                  theme={this.isDark}
                />
              </li>
            </div>
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
