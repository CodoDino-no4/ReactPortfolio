import { useState } from 'react';
import { Link } from 'react-scroll';
import DarkModeContent from '../../utils/resources/dark-mode.svg';
import LightModeContent from '../../utils/resources/light-mode.svg';
import { Button } from '../Button';
import { Toggle } from '../Toggle/Toggle';
import { BurgerMenuIcon } from '../BurgerMenu';
import './Navbar.scss';
import { NavLink } from '../NavLink/NavLink';
import React from 'react';

interface props {
  theme: string;
  windowSize: number;
}

export const Navbar = ({ theme, windowSize }: props): JSX.Element => {
  const [mobMenu, setMobMenu] = useState(false);
  const [navbarOffset] = useState(-80);

  const toggleMobMenu = () => {
    setMobMenu(!mobMenu);
  };

  const closeMobMenu = () => {
    setMobMenu(false);
  };

  const isDark = () => {
    if (theme === 'dark') {
      return true;
    } else {
      return false;
    }
  };

  const renderNav = (name, width) => {
    if (windowSize <= 960) {
      return (
        <Link
          to={name}
          className="nav-links"
          onClick={closeMobMenu}
          spy={true}
          smooth={true}
          duration={1000}
          isDynamic={true}
          offset={navbarOffset}
        >
          {name.toUpperCase()}
        </Link>
      );
    } else {
      return (
        <NavLink offsetHandler={navbarOffset} linkWidth={width} name={name} />
      );
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={toggleMobMenu}>
            <BurgerMenuIcon linkWidth={40} isOpen={mobMenu} />
          </div>
          <ul className={mobMenu ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">{renderNav('home', 115)}</li>
            <li className="nav-item">{renderNav('about', 125)}</li>
            <li className="nav-item">{renderNav('projects', 150)}</li>
            <li className="nav-item">{renderNav('contact', 140)}</li>
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
                theme={isDark()}
              />
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};
