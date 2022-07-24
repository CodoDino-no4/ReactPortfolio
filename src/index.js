import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Blog from './components/Pages/Blog/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route
        path="/github"
        render={() => (window.location = 'https://github.com/Alicee5cha')}
      />
    </Routes>
  </BrowserRouter>
);
