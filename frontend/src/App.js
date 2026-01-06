import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import TimelineSection from "./components/TimelineSection";
import WarRoomSection from "./components/WarRoomSection";
import CommunitySection from "./components/CommunitySection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <BioSection />
      <TimelineSection />
      <WarRoomSection />
      <CommunitySection />
      <SkillsSection />
      <Footer />
    </div>
  );
}

export default App;
