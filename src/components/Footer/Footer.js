import React from 'react';
import './Footer.scss';
import FooterArt from './SVG/FooterArt';
import linkedin from '../../images/linkedin-logo.svg';
import github from '../../images/github-logo.svg';
import code from '../../images/code-logo.svg';
import email from '../../images/envelope-logo.svg';
import Link from 'react-scroll/modules/components/Link';

const Footer = () => (
  <>
    <div className="footer">
      <div className="footer-items">
        <div className="links-grid">
          <Link className="grid-item" to={'https://github.com/Alicee5cha'}>
            <img src={github} />
            <p>GitHub</p>
          </Link>
          <Link className="grid-item">
            <img src={linkedin} />
            <p>LinkedIn</p>
          </Link>
          <Link className="grid-item">
            <img src={code} />
            <p>FrontEnd Mentor</p>
          </Link>
          <Link className="grid-item">
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
        <p>&copy; Copyright Alice Chambers 2022</p>
      </div>
    </div>
  </>
);

export default Footer;
