import './Footer.scss';
import { FooterArt } from './SVG/FooterArt';
import linkedin from '../../utils/resources/linkedin-logo.svg';
import github from '../../utils/resources/github-logo.svg';
import code from '../../utils/resources/code-logo.svg';
import email from '../../utils/resources/envelope-logo.svg';
import React from 'react';

export const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-items">
          <div className="links-grid">
            <a
              className="grid-item"
              href="https://github.com/Alicee5cha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} />
              <p>GitHub</p>
            </a>
            <a
              className="grid-item"
              href="https://linkedin.com/in/alicee5cha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} />
              <p>LinkedIn</p>
            </a>
            <a
              className="grid-item"
              href="https://codepen.io/alicee5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={code} />
              <p>Code Pen</p>
            </a>
            <a
              className="grid-item"
              href="mailto:alicee5cha@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={email} />
              <p>Email</p>
            </a>
          </div>
          <div className="footer-art">
            <FooterArt />
          </div>
        </div>
        <div className="footer-br">
          <p>Designed by Alice Chambers</p>
        </div>
      </div>
    </div>
  );
};
