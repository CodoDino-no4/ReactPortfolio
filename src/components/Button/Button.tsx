import { Link } from 'react-router-dom';
import './Button.scss';
import React from 'react';

interface props {
  name: string;
  link: string;
}

export const Button = ({ name, link }: props): JSX.Element => {
  return (
    <div className="btn-container">
      <Link to={link}>
        <button role="button" className={`btn ${name}-btn`}>
          {name.toUpperCase()}
        </button>
      </Link>
    </div>
  );
};
