import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobMenuOpen: false
    };
    // this._toggleMobMenu = this._toggleMobMenu.bind(this);
    // this._closeMobMenu = this._closeMobMenu.bind(this);
  }

  _toggleMobMenu = () => {
    console.log(this.state.isMobMenuOpen);
    const open = this.state.isMobMenuOpen;
    this.setState({
      isMobMenuOpen: !open
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
            <ul
              className={
                this.state.isMobMenuOpen ? 'nav-menu active' : 'nav-menu'
              }
            >
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={this._closeMobMenu}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#about"
                  className="nav-links"
                  onClick={this._closeMobMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#projects"
                  className="nav-links"
                  onClick={this._closeMobMenu}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#contact"
                  className="nav-links"
                  onClick={this._closeMobMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            <Link to="/" className="navbar-logo">
              ALICE <i className="fas fa-ghost" />
            </Link>
          </div>
        </nav>
      </>
    );
  }
}
