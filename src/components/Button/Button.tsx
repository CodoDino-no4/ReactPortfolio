import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';


interface props {
  name: string;
}

export const Button = ({ name }: props): JSX.Element => {
  return (
    <div className="icon">
      <Link to="/blog">
        <div className={`icon-${name}`}>BLOG</div>
      </Link>
    </div>
  );
}