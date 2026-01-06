import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Mic, Users, Calendar, MapPin } from 'lucide-react';
import './CommunitySection.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const CommunitySection = () => {
  const [speakingEngagements, setSpeakingEngagements] = useState([]);
  const [communityWork, setCommunityWork] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [speakingRes, communityRes] = await Promise.all([
          axios.get(`${API}/speaking`),
          axios.get(`${API}/community`)
        ]);
        setSpeakingEngagements(speakingRes.data);
        setCommunityWork(communityRes.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching community data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="community-section" id="community">
        <div className="community-container">
          <div className="loading-text">Loading...</div>
        </div>
      </section>
    );
  }

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
                  <img 
                    src="https://customer-assets.emergentagent.com/job_command-center-59/artifacts/1j1j2my3_4A8B1648.JPG" 
                    alt="UN India Hosting"
                    className="community-photo"
                  />
                  <div className="image-caption">UN India Hosting</div>
                </div>
                <div className="community-image-item">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_command-center-59/artifacts/e4l1hma9_Screenshot%202026-01-06%20at%201.29.50%20PM.jpg" 
                    alt="Leaders of India"
                    className="community-photo"
                  />
                  <div className="image-caption">Lead India 2024</div>
                </div>
                <div className="community-image-item">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_command-center-59/artifacts/ik1xbx5s_b35a2da7-7f10-43ee-bb3d-9ee6b6dd27c9.jpg" 
                    alt="Community Events"
                    className="community-photo"
                  />
                  <div className="image-caption">Community Events</div>
                </div>
              </div>
            </div>
            
            <div className="community-image-section">
              <h4 className="image-section-title">Community Volunteering & Outreach</h4>
              <div className="community-images community-images-single">
                <div className="community-image-item">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_command-center-59/artifacts/q1b05tq2_IMG_6770.jpg" 
                    alt="College Speaking Session"
                    className="community-photo"
                  />
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