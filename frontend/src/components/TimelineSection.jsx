import React, { useRef, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import axios from 'axios';
import { ChevronRight, Building2, Calendar, TrendingUp } from 'lucide-react';
import { timelineData as mockTimelineData } from '../mock';
import './TimelineSection.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';
const API = BACKEND_URL.endsWith('/api') ? BACKEND_URL : `${BACKEND_URL}/api`; // supports '', '/api', or full origin

const TimelineSection = () => {
  const scrollRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get(`${API}/experiences`, { timeout: 5000 });
        setTimelineData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching experiences:', error);
        // Use mock data as fallback
        setTimelineData(mockTimelineData);
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (loading || timelineData.length === 0) {
    return (
      <section className="timeline-section" id="timeline">
        <div className="timeline-container">
          <div className="loading-text">Loading timeline...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="timeline-section" id="timeline">
      <div className="spline-background-timeline">
        <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
      </div>
      
      <div className="timeline-container">
        <div className="timeline-header">
          <h2 className="timeline-title">Experiences</h2>
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