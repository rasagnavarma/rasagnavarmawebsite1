import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Target, Users, TrendingUp, Shield, Award, Brain, Globe } from 'lucide-react';
import { bioData } from '../mock';
import './BioSection.css';

const BioSection = () => {
  const [visibleParagraphs, setVisibleParagraphs] = useState([]);
  const sectionRef = useRef(null);

  // Safety check: ensure bioData exists
  if (!bioData || !bioData.narrative || !bioData.values) {
    console.error('BioData is missing or incomplete');
    return null;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && bioData && bioData.narrative) {
            bioData.narrative.forEach((_, index) => {
              setTimeout(() => {
                setVisibleParagraphs(prev => [...prev, index]);
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const iconMap = {
    Target,
    Users,
    TrendingUp,
    Shield,
    Award,
    Brain,
    Globe
  };

  return (
    <section className="bio-section" ref={sectionRef}>
      <div className="spline-background-bio">
        <Spline 
          scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
          onError={(error) => {
            console.warn('Spline loading error:', error);
          }}
          onLoad={(spline) => {
            console.log('Spline loaded successfully');
          }}
        />
      </div>
      
      <div className="bio-container">
        <div className="bio-header">
          <h2 className="bio-title">{bioData.title}</h2>
          <div className="bio-divider"></div>
        </div>
        
        <div className="bio-narrative">
          {bioData.narrative.map((paragraph, index) => (
            <p 
              key={index} 
              className={`narrative-paragraph ${visibleParagraphs.includes(index) ? 'visible' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="bio-values">
          {bioData.values.map((value, index) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="value-label">{value.label}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BioSection;
