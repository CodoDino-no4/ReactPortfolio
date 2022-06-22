import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import FooterArt from './SVG/FooterArt';
import linkedin from '../../images/linkedin-logo.svg';
import github from '../../images/github-logo.svg';
import code from '../../images/code-logo.svg';
import email from '../../images/envelope-logo.svg';

const Footer = () => (
  <div className="footer">
    <div className="footer-items">
      <div className="links-grid">
        <Link
          className="grid-item"
          to="/external-link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} />
          <p>GitHub</p>
        </Link>
        <Link
          className="grid-item"
          to="/external-link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} />
          <p>LinkedIn</p>
        </Link>
        <Link
          className="grid-item"
          to="/external-link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={code} />
          <p>FrontEnd Mentor</p>
        </Link>
        <Link
          className="grid-item"
          to="/external-link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} />
          <p>Email</p>
        </Link>
      </div>
      <div className="footer-art">
        <FooterArt />
      </div>
    </div>
    <div className="footer-br">
      <p>Designed by Alice Chambers</p>
    </div>
  </div>
);

export default Footer;
