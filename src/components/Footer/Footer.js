import React from 'react';
import './Footer.scss';
import FooterArt from './SVG/FooterArt';
import linkedin from '../../images/linkedin-logo.svg';
import github from '../../images/github-logo.svg';
import code from '../../images/code-logo.svg';
import email from '../../images/envelope-logo.svg';

const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="footer-items">
        <div className="links-grid">
          <a
            className="grid-item"
            href="https://github.com/Alicee5cha"
            target="_blank"
            rel="noopener"
          >
            <img src={github} />
            <p>GitHub</p>
          </a>
          <a
            className="grid-item"
            href="https://linkedin.com/in/alicee5cha"
            target="_blank"
            rel="noopener"
          >
            <img src={linkedin} />
            <p>LinkedIn</p>
          </a>
          <a
            className="grid-item"
            href="https://codepen.io/alicee5"
            target="_blank"
            rel="noopener"
          >
            <img src={code} />
            <p>Code Pen</p>
          </a>
          <a
            className="grid-item"
            href="mailto:alicee5cha@gmail.com"
            target="_blank"
            rel="noopener"
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

export default Footer;
