import React from 'react';
import './Footer.scss';
import FooterArt from './SVG/FooterArt';

const Footer = () => (
  <>
    <div className="footer">
      <div className="footer-items">
        <div className="links-grid">
          <div className="grid-item">
            <i className="fab fa-github"></i>GitHub
          </div>
          <div className="grid-item">
            <i className="fab fa-linkedin"></i>LinkedIn
          </div>
          <div className="grid-item">
            <i className="fas fa-code"></i>FrontEnd Mentor
          </div>
          <div className="grid-item">
            <i className="fas fa-envelope"></i>Email
          </div>
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
