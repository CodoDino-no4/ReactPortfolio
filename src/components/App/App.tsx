import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from '../Sections/Home';
import React, { useState } from 'react';
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

  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return (
    <>
      <div data-theme={theme}>
        <BrowserRouter>
          {/* <Navbar themeHandler={switchTheme()} theme={theme} /> */}
          <Routes>
            <Route path="/" element={<Home windowSize={windowSize} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};
