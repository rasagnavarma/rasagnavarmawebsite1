import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import axios from 'axios';
import { AlertCircle, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';
import './WarRoomSection.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const WarRoomSection = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [escalationMissions, setEscalationMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.get(`${API}/missions`);
        setEscalationMissions(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching missions:', error);
        setLoading(false);
      }
    };
    fetchMissions();
  }, []);

  const getStatusIcon = (status) => {
    return status === 'Resolved' ? <CheckCircle size={20} /> : <AlertCircle size={20} />;
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return '#FF4444';
      case 'High': return '#FFD700';
      default: return '#00FFD1';
    }
  };

  if (loading || escalationMissions.length === 0) {
    return (
      <section className="warroom-section" id="warroom">
        <div className="warroom-container">
          <div className="loading-text">Loading missions...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="warroom-section" id="warroom">
      <div className="warroom-container">
        <div className="warroom-header">
          <div className="warroom-badge">MISSION CONTROL</div>
          <h2 className="warroom-title">Escalation War Room</h2>
          <p className="warroom-subtitle">Critical incidents, strategic resolutions, measurable impact</p>
        </div>
        
        <div className="warroom-grid">
          {escalationMissions.map((mission) => (
            <div 
              key={mission.id} 
              className={`mission-card ${selectedMission === mission.id ? 'active' : ''}`}
              onClick={() => setSelectedMission(selectedMission === mission.id ? null : mission.id)}
            >
              <div className="mission-header">
                <div className="mission-status" style={{color: mission.status === 'Resolved' ? '#00FFD1' : '#FFD700'}}>
                  {getStatusIcon(mission.status)}
                  <span>{mission.status}</span>
                </div>
                <div className="mission-priority" style={{borderColor: getPriorityColor(mission.priority)}}>
                  {mission.priority}
                </div>
              </div>
              
              <h3 className="mission-title">{mission.title}</h3>
              
              <div className="mission-metrics">
                <div className="mission-metric">
                  <Clock size={16} />
                  <span>{mission.resolutionTime}</span>
                </div>
                <div className="mission-metric">
                  <TrendingUp size={16} />
                  <span>{mission.impact}</span>
                </div>
              </div>
              
              {selectedMission === mission.id && (
                <div className="mission-details">
                  <div className="detail-section">
                    <h4>Problem</h4>
                    <p>{mission.problem}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Actions Taken</h4>
                    <ul>
                      {mission.actions.map((action, idx) => (
                        <li key={idx}>{action}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Stakeholders</h4>
                    <div className="stakeholders">
                      <Users size={16} />
                      <span>{mission.stakeholders.join(' • ')}</span>
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Outcome</h4>
                    <p className="outcome-text">{mission.outcome}</p>
                  </div>
                </div>
              )}
              
              <div className="mission-expand-hint">
                {selectedMission === mission.id ? '▲ Click to collapse' : '▼ Click to view details'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarRoomSection;