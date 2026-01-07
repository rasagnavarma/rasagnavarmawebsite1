import React from 'react';
import { Award, Code, Wrench, Target, Users as UsersIcon } from 'lucide-react';
import { skills, certifications } from '../mock';
import './SkillsSection.css';

const SkillsSection = () => {

  const skillCategories = [
    { title: 'Leadership Excellence', items: skills.leadership, icon: UsersIcon },
    { title: 'Salesforce Platforms', items: skills.platforms, icon: Code },
    { title: 'Tools & Technologies', items: skills.tools, icon: Wrench },
    { title: 'Methodologies & Frameworks', items: skills.methodologies, icon: Target },
    { title: 'Technical Skills', items: skills.programming, icon: Code }
  ];

  const certCategories = [
    { name: 'Salesforce', color: '#00A1E0' },
    { name: 'Leadership', color: '#FFD700' },
    { name: 'Agile', color: '#00FFD1' },
    { name: 'AI', color: '#9D4EDD' }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Expertise</h2>
          <p className="skills-subtitle">Technical proficiency meets leadership excellence</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="skill-category-card">
                <div className="skill-category-header">
                  <IconComponent size={24} />
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-tags">
                  {category.items.map((item, idx) => (
                    <span key={idx} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="certifications-section">
          <div className="cert-header">
            <Award size={32} />
            <h3>Certifications</h3>
          </div>
          
          <div className="cert-categories">
            {certCategories.map((cat, index) => (
              <div key={index} className="cert-category">
                <div className="cert-category-label" style={{borderColor: cat.color, color: cat.color}}>
                  {cat.name}
                </div>
                <div className="cert-list">
                  {certifications
                    .filter(cert => cert.category === cat.name)
                    .map((cert, idx) => (
                      <div key={idx} className="cert-item">
                        <div className="cert-name">{cert.name}</div>
                        <div className="cert-meta">
                          <span className="cert-issuer">{cert.issuer}</span>
                          <span className="cert-year">{cert.year}</span>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;