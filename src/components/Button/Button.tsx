import { Link } from 'react-router-dom';
import './Button.scss';
import React from 'react';

interface props {
  name: string;
}

export const Button = ({ name }: props): JSX.Element => {
  return (
    <div className="btn-container">
      <Link to={`/${name}`}>
        <div className={`btn ${name}-btn`}>{name.toUpperCase()}</div>
      </Link>
    </div>
  );
};
