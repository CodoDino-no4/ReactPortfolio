import { Link } from 'react-router-dom';
import './MobNavLink.scss';
import React from 'react';

interface props {
  name: string;
}

export const MobNavLink = ({ name }: props): JSX.Element => {
  return (
    <Link className={'nav-link'} to={`/#${name}`}>
      {name.toUpperCase()}
    </Link>
  );
};
