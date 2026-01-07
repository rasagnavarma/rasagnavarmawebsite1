import React from 'react';
import { Mic, Users, Calendar, MapPin } from 'lucide-react';
import { speakingEngagements, communityWork } from '../mock';
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
            Community Leadership & Impact
          </h3>
          
          <div className="community-images-grid">
            <div className="community-image-section">
              <h4 className="image-section-title">Speaking Engagements</h4>
              <div className="community-images">
                <div className="community-image-item">
                  <picture>
                    <img
                      src="/assets/emergent/1j1j2my3_4A8B1648-800.JPG"
                      srcSet="/assets/emergent/1j1j2my3_4A8B1648-400.JPG 400w, /assets/emergent/1j1j2my3_4A8B1648-800.JPG 800w, /assets/emergent/1j1j2my3_4A8B1648-1200.JPG 1200w"
                      sizes="(max-width: 600px) 400px, 800px"
                      alt="UN India Hosting"
                      className="community-photo"
                      loading="lazy"
                    />
                  </picture>
                  <div className="image-caption">UN India Hosting</div>
                </div>
                <div className="community-image-item">
                  <picture>
                    <img
                      src="/assets/emergent/e4l1hma9_Screenshot_2026-01-06_at_1.29.50_PM-800.jpg"
                      srcSet="/assets/emergent/e4l1hma9_Screenshot_2026-01-06_at_1.29.50_PM-400.jpg 400w, /assets/emergent/e4l1hma9_Screenshot_2026-01-06_at_1.29.50_PM-800.jpg 800w, /assets/emergent/e4l1hma9_Screenshot_2026-01-06_at_1.29.50_PM-1200.jpg 1200w"
                      sizes="(max-width: 600px) 400px, 800px"
                      alt="Leaders of India"
                      className="community-photo"
                      loading="lazy"
                    />
                  </picture>
                  <div className="image-caption">Lead India 2024</div>
                </div>
                <div className="community-image-item">
                  <picture>
                    <img
                      src="/assets/emergent/ik1xbx5s_b35a2da7-7f10-43ee-bb3d-9ee6b6dd27c9-800.jpg"
                      srcSet="/assets/emergent/ik1xbx5s_b35a2da7-7f10-43ee-bb3d-9ee6b6dd27c9-400.jpg 400w, /assets/emergent/ik1xbx5s_b35a2da7-7f10-43ee-bb3d-9ee6b6dd27c9-800.jpg 800w, /assets/emergent/ik1xbx5s_b35a2da7-7f10-43ee-bb3d-9ee6b6dd27c9-1200.jpg 1200w"
                      sizes="(max-width: 600px) 400px, 800px"
                      alt="Community Events"
                      className="community-photo"
                      loading="lazy"
                    />
                  </picture>
                  <div className="image-caption">Community Events</div>
                </div>
              </div>
            </div>
            
            <div className="community-image-section">
              <h4 className="image-section-title">Community Volunteering & Outreach</h4>
              <div className="community-images community-images-single">
                <div className="community-image-item">
                  <picture>
                    <img
                      src="/assets/emergent/q1b05tq2_IMG_6770-800.jpg"
                      srcSet="/assets/emergent/q1b05tq2_IMG_6770-400.jpg 400w, /assets/emergent/q1b05tq2_IMG_6770-800.jpg 800w, /assets/emergent/q1b05tq2_IMG_6770-1200.jpg 1200w"
                      sizes="(max-width: 600px) 400px, 800px"
                      alt="College Speaking Session"
                      className="community-photo"
                      loading="lazy"
                    />
                  </picture>
                  <div className="image-caption">College Speaking Session</div>
                </div>
              </div>
              <p className="add-more-note">More photos coming soon...</p>
            </div>
          </div>
          
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