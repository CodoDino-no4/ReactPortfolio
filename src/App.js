import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Sections/Home/Home';
import About from './components/Sections/About/About';
import Projects from './components/Sections/Projects/Projects';
import Contact from './components/Sections/Contact/Contact';
import RedirectPage from './components/Redirect/Redirect';
// import NotFound from './components/Pages/404/NotFound';

function App() {
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
      <Router>
        <Navbar themeHandler={switchTheme} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Routes>
          <Route path="/redirect" element={<RedirectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default hot(App);
