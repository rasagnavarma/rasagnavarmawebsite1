import React from 'react';
import { speakingEngagements, communityWork } from '../mock';
import { Mic, Users, Calendar, MapPin } from 'lucide-react';
import './CommunitySection.css';

const CommunitySection = () => {
  return (
    <section className="community-section" id="community">
      <div className="community-container">
        <div className="community-header">
          <h2 className="community-title">Speaking & Community</h2>
          <p className="community-subtitle">Sharing knowledge, inspiring change, building communities</p>
        </div>
        
        <div className="speaking-grid">
          {speakingEngagements.map((engagement) => (
            <div key={engagement.id} className="speaking-card">
              <div className="speaking-type">{engagement.type}</div>
              <h3 className="speaking-event">{engagement.event}</h3>
              <p className="speaking-topic">{engagement.topic}</p>
              
              <div className="speaking-meta">
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>{engagement.year}</span>
                </div>
                <div className="meta-item">
                  <Users size={14} />
                  <span>{engagement.audience} attendees</span>
                </div>
              </div>
              
              <p className="speaking-description">{engagement.description}</p>
            </div>
          ))}
        </div>
        
        <div className="community-work">
          <h3 className="community-work-title">
            <Mic size={24} />
            Community Leadership
          </h3>
          <div className="community-work-grid">
            {communityWork.map((work, index) => (
              <div key={index} className="community-work-card">
                <h4 className="work-title">{work.title}</h4>
                <div className="work-org">
                  <MapPin size={16} />
                  <span>{work.organization}</span>
                </div>
                <p className="work-description">{work.description}</p>
                <div className="work-team">
                  <Users size={16} />
                  <span>{work.team}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;