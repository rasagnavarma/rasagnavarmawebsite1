import React, { useRef, useState } from 'react';
import { timelineData } from '../mock';
import { ChevronRight, Building2, Calendar, TrendingUp } from 'lucide-react';
import './TimelineSection.css';

const TimelineSection = () => {
  const scrollRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-container">
        <div className="timeline-header">
          <h2 className="timeline-title">Impact Timeline</h2>
          <p className="timeline-subtitle">A journey through roles, teams, and transformations</p>
        </div>
        
        <div className="timeline-controls">
          <button className="timeline-nav-btn" onClick={() => handleScroll('left')}>
            <ChevronRight style={{transform: 'rotate(180deg)'}} size={24} />
          </button>
          <button className="timeline-nav-btn" onClick={() => handleScroll('right')}>
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="timeline-scroll" ref={scrollRef}>
          <div className="timeline-track">
            {timelineData.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div 
                  className={`timeline-card ${expandedCard === item.id ? 'expanded' : ''}`}
                  onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                  style={{'--accent-color': item.color}}
                >
                  <div className="timeline-card-header">
                    <div className="timeline-badge" style={{background: item.color}}>
                      {index + 1}
                    </div>
                    <div className="timeline-meta">
                      <div className="timeline-company">
                        <Building2 size={16} />
                        <span>{item.company}</span>
                      </div>
                      <div className="timeline-dates">
                        <Calendar size={16} />
                        <span>{item.dates}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="timeline-role">{item.role}</h3>
                  <p className="timeline-team">{item.team}</p>
                  
                  <div className="timeline-impact">
                    <TrendingUp size={18} />
                    <span>{item.impact}</span>
                  </div>
                  
                  {expandedCard === item.id && (
                    <div className="timeline-achievements">
                      <h4>Key Achievements</h4>
                      <ul>
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="timeline-expand-hint">
                    {expandedCard === item.id ? 'Click to collapse' : 'Click to expand'}
                  </div>
                </div>
                
                {index < timelineData.length - 1 && (
                  <div className="timeline-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;