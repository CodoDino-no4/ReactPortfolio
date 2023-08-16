import { Link } from 'react-router-dom';
import './Button.scss';
import React from 'react';

interface props {
  name: string;
  link: string;
  theme: string;
}

export const Button = ({ name, link, theme }: props): JSX.Element => {
  return (
    <div className="btn-container">
      <Link to={link}>
        <button role="button" className={`btn ${theme} ${name}`}>
          {name.toUpperCase()}
        </button>
      </Link>
    </div>
  );
};

{
  /* <button class="m-buttons__btn green" role="button">
  BLOG
</button> */
}
