import React, { useEffect, useState } from 'react';
import { heroData } from '../mock';
import './HeroSection.css';

const HeroSection = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setCounters(heroData.metrics.map(() => 0));
  }, []);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
      heroData.metrics.forEach((metric, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = metric.value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= metric.value) {
            current = metric.value;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, duration / steps);
      });
    }
  }, [hasAnimated]);

  return (
    <section className="hero-section">
      <div className="hero-grid-pattern"></div>
      
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge">OPERATIONS LEADER • SALESFORCE</div>
          
          <h1 className="hero-name">
            <span className="name-line animate-slide-in" style={{animationDelay: '0.2s'}}>
              Buddharaju
            </span>
            <span className="name-line animate-slide-in" style={{animationDelay: '0.4s'}}>
              Rasagna Varma
            </span>
          </h1>
          
          <p className="hero-role animate-fade-in" style={{animationDelay: '0.6s'}}>
            {heroData.role}
          </p>
          
          <p className="hero-tagline animate-fade-in" style={{animationDelay: '0.8s'}}>
            {heroData.tagline}
          </p>
          
          <div className="hero-metrics">
            {heroData.metrics.map((metric, index) => (
              <div 
                key={index} 
                className="metric-card animate-fade-in"
                style={{animationDelay: `${1 + index * 0.1}s`}}
              >
                <div className="metric-value">
                  {counters[index]}{metric.suffix}
                </div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
          
          <div className="hero-cta animate-fade-in" style={{animationDelay: '1.6s'}}>
            <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
              Get in Touch
              <span className="arrow">→</span>
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('timeline').scrollIntoView({behavior: 'smooth'})}>
              View Experience
              <span className="arrow">↓</span>
            </button>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="hero-image-container">
            <picture>
              <img
                src="/assets/emergent/no812xp5_DSC00728-800.jpg"
                srcSet="/assets/emergent/no812xp5_DSC00728-400.jpg 400w, /assets/emergent/no812xp5_DSC00728-800.jpg 800w, /assets/emergent/no812xp5_DSC00728-1200.jpg 1200w"
                sizes="(max-width: 600px) 400px, 800px"
                alt="Rasagna Varma"
                className="hero-profile-image"
                loading="lazy"
              />
            </picture>
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
