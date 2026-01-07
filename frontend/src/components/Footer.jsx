import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-title">Let's Connect</h2>
            <p className="footer-description">
              Open to opportunities in leadership, escalation management, AI research, and strategic initiatives.
              Let's build something impactful together.
            </p>
          </div>
          
          <div className="footer-right">
            <div className="contact-links">
              <a href="mailto:rasagnavarma@gmail.com" className="contact-link">
                <Mail size={20} />
                <span>rasagnavarma@gmail.com</span>
              </a>
              <a href="tel:+918985689997" className="contact-link">
                <Phone size={20} />
                <span>+91 8985689997</span>
              </a>
              <a href="https://www.linkedin.com/in/rasagnavarmasai/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin size={20} />
                <span>LinkedIn: rasagnavarmasai</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Buddharaju Rasagna Varma. All rights reserved.
          </p>
          <p className="footer-tagline">
            Built with precision • Designed for impact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;