import propTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-scroll';
import DarkModeContent from '../../images/dark-mode.svg';
import LightModeContent from '../../images/light-mode.svg';
import Button from '../Button/Button';
import Toggle from '../Toggle/Toggle';
import BurgerMenuIcon from './BurgerMenuIcon';
import './Navbar.scss';
import NavLink from './NavLink';

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
    if (this.props.theme === 'dark') {
      return true;
    } else {
      return false;
    }
  }

  renderNav = (name, width) => {
    { console.log(this.props.windowSize) }
    if (this.props.windowSize <= 960) {
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
              <BurgerMenuIcon linkWidth={40} open={this.state.isMobMenuOpen} />
            </div>
            <ul
              className={
                this.state.isMobMenuOpen ? 'nav-menu active' : 'nav-menu'
              }
            >
              <li className="nav-item">{this.renderNav('home', 115)}</li>
              <li className="nav-item">{this.renderNav('about', 125)}</li>
              <li className="nav-item">{this.renderNav('projects', 150)}</li>
              <li className="nav-item">{this.renderNav('contact', 140)}</li>
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
                  theme={this.isDark()}
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
