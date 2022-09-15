import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import App from './App';
import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Blog from './Pages/Blog/Home';

function Main() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const windowSize = () => {
    return window.innerWidth;
  }

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App windowSize={windowSize()} />}>
            <Route
              index
              element={<Navbar themeHandler={switchTheme} theme={theme} windowSize={windowSize()} />}
            />
          </Route>
          <Route path="/blog" element={<Blog />}>
            <Route
              index
              element={<Navbar themeHandler={switchTheme} theme={theme} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default Main;
