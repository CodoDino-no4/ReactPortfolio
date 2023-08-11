import React from 'react';
import './Badge.scss';

interface props {
  text: string;
}

export const Badge = ({ text }: props): JSX.Element => {
  return <div className="badge-container">{text}</div>;
};
