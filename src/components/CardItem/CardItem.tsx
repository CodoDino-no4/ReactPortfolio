import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CardItem = (): JSX.Element => {
  const [lang, setLang] = useState('');
  const [langColour, setLangColour] = useState('');
  const [path, setPath] = useState('');
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');
  const [text, setText] = useState('');

  const setLanguageColour = () => {
    setLangColour('#1f98f4');
  };

  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={path}>
          <figure className="cards-item-pic-wrap" data-category={lang}>
            <img src={src} alt={alt} className="cards-item-img" />
          </figure>
          <div className="cards-item-info">
            <p className="cards-item-text">{text}</p>
          </div>
        </Link>
      </li>
    </>
  );
};
