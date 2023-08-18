import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeContent from '../../utils/resources/dark-mode.svg';
import LightModeContent from '../../utils/resources/light-mode.svg';
import { Button } from '../Button';
import { Toggle } from '../Toggle/Toggle';
import { BurgerMenuIcon } from '../BurgerMenu';
import './Navbar.scss';
import React from 'react';
import { DesktopNavLink } from '../DesktopNavLink/DesktopNavLink';

interface props {
  theme: string;
  windowSize: number;
}

export const Navbar = ({ theme, windowSize }: props): JSX.Element => {
  const [mobMenu, setMobMenu] = useState(false);
  const [navbarOffset] = useState(-80);
  const [newTheme, setNewTheme] = useState(theme);
  const isDark = theme === 'dark' ? true : false;
  const location = useLocation();

  const toggleMobMenu = () => {
    setMobMenu(!mobMenu);
  };

  const closeMobMenu = () => {
    setMobMenu(false);
  };

  const switchTheme = () => {
    setNewTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.slice(1));
      if (section) {
        const sectionPosition = section?.getBoundingClientRect().top;
        const scrollPosition = sectionPosition + window.scrollY + navbarOffset;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: navbarOffset, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  const renderNav = (name, width) => {
    // Mobile Nav Link
    if (windowSize <= 960) {
      return (
        <Link to={`/#${name}`} className="nav-links" onClick={closeMobMenu}>
          {name.toUpperCase()}
        </Link>
      );
    } else {
      // Desktop Nav Link
      return <DesktopNavLink linkWidth={width} name={name} />;
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
              <Button name="blog" link="./blog" />
            </li>
            <li className="tools-item">
              <Toggle
                name="theme"
                dataOn={DarkModeContent}
                dataOff={LightModeContent}
                checked={isDark}
              />
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};
