import React from 'react';
import { contactData } from '../mock';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-title">Let's Connect</h2>
            <p className="footer-description">
              Open to opportunities in leadership, escalation management, and strategic initiatives.
              Let's build something impactful together.
            </p>
          </div>
          
          <div className="footer-right">
            <div className="contact-links">
              <a href={`mailto:${contactData.email}`} className="contact-link">
                <Mail size={20} />
                <span>{contactData.email}</span>
              </a>
              <a href={`mailto:${contactData.workEmail}`} className="contact-link">
                <Mail size={20} />
                <span>{contactData.workEmail}</span>
              </a>
              <a href={`tel:${contactData.phone}`} className="contact-link">
                <Phone size={20} />
                <span>{contactData.phone}</span>
              </a>
              <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
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