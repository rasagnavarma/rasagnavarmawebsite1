import React from 'react';
import { Brain, Sparkles, Zap, Database } from 'lucide-react';
import './AIResearchSection.css';

const AIResearchSection = () => {
  const aiProjects = [
    {
      title: "AI-Powered Escalation Prediction",
      description: "Leveraging machine learning to predict and prevent critical incidents before they impact customers",
      impact: "35% reduction in escalation response time",
      icon: Brain
    },
    {
      title: "Intelligent Process Automation",
      description: "Building AI-driven workflows that optimize team operations and resource allocation",
      impact: "50% improvement in operational efficiency",
      icon: Zap
    },
    {
      title: "Customer Sentiment Analysis",
      description: "Real-time AI analysis of customer interactions to improve satisfaction and retention",
      impact: "60% increase in proactive issue resolution",
      icon: Sparkles
    },
    {
      title: "Data-Driven Leadership Insights",
      description: "AI models that provide actionable insights for strategic decision-making and team performance",
      impact: "Enhanced data-driven culture across teams",
      icon: Database
    }
  ];

  return (
    <section className="ai-research-section" id="ai-research">
      <div className="ai-research-container">
        <div className="ai-research-header">
          <div className="ai-badge">AI RESEARCHER & INNOVATOR</div>
          <h2 className="ai-research-title">AI Research & Innovation</h2>
          <p className="ai-research-subtitle">
            Exploring the intersection of artificial intelligence and operational excellence
          </p>
        </div>

        <div className="ai-intro">
          <div className="ai-intro-content">
            <h3>Pioneering AI Applications in Operations</h3>
            <p>
              As an AI researcher, Rasagna is at the forefront of applying artificial intelligence 
              to solve complex operational challenges. His work focuses on predictive analytics, 
              intelligent automation, and data-driven decision-making frameworks that transform 
              how organizations manage critical incidents and customer relationships.
            </p>
            <p>
              Through continuous research and experimentation, he develops innovative AI solutions 
              that bridge the gap between theoretical possibilities and practical business applications, 
              driving measurable impact across Salesforce operations.
            </p>
          </div>
          
          <div className="ai-image-placeholder">
            <div className="ai-visual-container">
              <Brain size={80} strokeWidth={1} className="ai-icon-large" />
              <div className="ai-particles">
                <span className="particle"></span>
                <span className="particle"></span>
                <span className="particle"></span>
              </div>
            </div>
            <p className="image-note">AI Innovation Visualization</p>
          </div>
        </div>

        <div className="ai-projects-grid">
          {aiProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="ai-project-card">
                <div className="ai-project-icon">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h4 className="ai-project-title">{project.title}</h4>
                <p className="ai-project-description">{project.description}</p>
                <div className="ai-project-impact">
                  <Sparkles size={16} />
                  <span>{project.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="ai-research-gallery">
          <h3 className="gallery-title">Professional Showcase</h3>
          <p className="gallery-subtitle">Leadership moments and professional engagements</p>
          <div className="ai-gallery-grid">
            <div className="gallery-item">
              <picture>
                <img
                  src="/assets/emergent/79gvpq62_DSC05867-800.JPG"
                  srcSet="/assets/emergent/79gvpq62_DSC05867-400.JPG 400w, /assets/emergent/79gvpq62_DSC05867-800.JPG 800w, /assets/emergent/79gvpq62_DSC05867-1200.JPG 1200w"
                  sizes="(max-width: 600px) 400px, 800px"
                  alt="Rasagna Varma Professional 1"
                  className="gallery-image"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="gallery-item">
              <picture>
                <img
                  src="/assets/emergent/6o75miw4_de4c8da6-0a34-406a-98d1-440f48ae7aec-800.png"
                  srcSet="/assets/emergent/6o75miw4_de4c8da6-0a34-406a-98d1-440f48ae7aec-400.png 400w, /assets/emergent/6o75miw4_de4c8da6-0a34-406a-98d1-440f48ae7aec-800.png 800w, /assets/emergent/6o75miw4_de4c8da6-0a34-406a-98d1-440f48ae7aec-1200.png 1200w"
                  sizes="(max-width: 600px) 400px, 800px"
                  alt="Rasagna Varma Professional 2"
                  className="gallery-image"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="gallery-item">
              <picture>
                <img
                  src="/assets/emergent/no812xp5_DSC00728-800.jpg"
                  srcSet="/assets/emergent/no812xp5_DSC00728-400.jpg 400w, /assets/emergent/no812xp5_DSC00728-800.jpg 800w, /assets/emergent/no812xp5_DSC00728-1200.jpg 1200w"
                  sizes="(max-width: 600px) 400px, 800px"
                  alt="Rasagna Varma Professional 3"
                  className="gallery-image"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <Sparkles size={40} />
                <p>Add more images</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIResearchSection;
