import { Link } from 'react-router-dom';
import './MobNavLink.scss';
import React from 'react';

interface props {
  name: string;
  active: boolean;
}

export const MobNavLink = ({ name, active }: props): JSX.Element => {
  return (
    <Link
      className={active ? 'mob-nav-link active' : 'mob-nav-link'}
      to={`/#${name}`}
    >
      {name.toUpperCase()}
    </Link>
  );
};
