import React from "react";
import "./App.css";
import useSmoothScroll from "./hooks/useSmoothScroll";
import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import TimelineSection from "./components/TimelineSection";
import WarRoomSection from "./components/WarRoomSection";
import AIResearchSection from "./components/AIResearchSection";
import CommunitySection from "./components/CommunitySection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

function App() {
  useSmoothScroll();
  
  // Verify static site - no API calls
  console.log('Static site loaded - using mock data only');
  
  return (
    <div className="App">
      <HeroSection />
      <BioSection />
      <TimelineSection />
      <WarRoomSection />
      <AIResearchSection />
      <CommunitySection />
      <SkillsSection />
      <Footer />
    </div>
  );
}

export default App;
