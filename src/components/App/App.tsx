import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from '../Sections/Home';
import React from 'react';
import { Navbar } from '../Navbar';
import useLocalStorage from 'use-local-storage';
import { Footer } from '../Footer';
import { Blog } from '../Blog';
import { NotFound } from '../NotFound';

export const App = (): JSX.Element => {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  
  return (
    <>
      <div data-theme={theme}>
        <BrowserRouter>
          <Navbar themeHandler={switchTheme()} theme={theme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Outlet />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};
