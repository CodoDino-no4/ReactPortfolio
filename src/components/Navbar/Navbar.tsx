import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DarkModeContent from '../../utils/resources/dark-mode.svg';
import LightModeContent from '../../utils/resources/light-mode.svg';
import { Button } from '../Button';
import { Toggle } from '../Toggle/Toggle';
import { BurgerMenuIcon } from '../BurgerMenu';
import './Navbar.scss';
import React from 'react';
import { DesktopNavLink } from '../DesktopNavLink';
import { MobNavLink } from '../MobNavLink';

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

  const links = [
    {
      name: 'home',
      active: false,
      width: 115,
    },
    {
      name: 'about',
      active: false,
      width: 120,
    },
    {
      name: 'projects',
      active: false,
      width: 145,
    },
    {
      name: 'contact',
      active: false,
      width: 140,
    },
  ];

  const [linkList, setLinkList] = useState(links);

  const toggleMobMenu = () => {
    setMobMenu(!mobMenu);
  };

  const navClick = () => {
    // Close mob menu
    setMobMenu(false);

    // Set active
  };

  const switchTheme = () => {
    setNewTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollSmooth = () => {
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
  };

  useEffect(() => {
    scrollSmooth();
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={toggleMobMenu}>
            <BurgerMenuIcon linkWidth={40} isOpen={mobMenu} />
          </div>
          <div className={mobMenu ? 'nav-menu active' : 'nav-menu'}>
            {linkList.map((item) => {
              return (
                <div key={item.name} className="nav-item" onClick={navClick}>
                  {windowSize <= 960 ? (
                    <MobNavLink name={item.name} active={item.active} />
                  ) : (
                    <DesktopNavLink
                      linkWidth={item.width}
                      name={item.name}
                      active={item.active}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="navbar-tools">
            <li className="tools-item">
              <Button name="blog" />
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
