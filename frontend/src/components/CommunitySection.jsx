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