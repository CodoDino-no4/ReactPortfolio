import React from 'react';
import './Footer.scss';

const Footer = () => (
  <>
    <div className="footer">
      <div className="links-grid">
        <div className="grid-item">
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="grid-item">
          <i className="fab fa-github"></i>
        </div>
        <div className="grid-item">
          <i className="fas fa-code"></i>
        </div>
        <div className="grid-item">
          <i className="fas fa-envelope"></i>
        </div>
      </div>
      <div className="footer-br">
        <p>Copyright Alice Chambers</p>
      </div>
    </div>
  </>
);

export default Footer;
