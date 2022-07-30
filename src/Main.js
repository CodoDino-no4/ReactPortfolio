import React from 'react';
import useLocalStorage from 'use-local-storage';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import App from './App';
import Blog from './Pages/Blog/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={<Navbar themeHandler={switchTheme} theme={theme} />}
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
