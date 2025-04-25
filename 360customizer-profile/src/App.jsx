import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import MissionVision from "./components/MissionVision/MissionVision";
import ValuesSection from "./components/ValuesSection/ValuesSection";
import TeamSection from "./components/TeamSection/TeamSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="app">
      <AnimatePresence>
        <HeroSection key="hero" setActiveSection={setActiveSection} />
        <AboutSection key="about" setActiveSection={setActiveSection} />
        <MissionVision key="mission" setActiveSection={setActiveSection} />
        <ValuesSection key="values" setActiveSection={setActiveSection} />
        <TeamSection key="team" setActiveSection={setActiveSection} />
        <ContactSection key="contact" setActiveSection={setActiveSection} />
        <Footer key="footer" />
      </AnimatePresence>
    </div>
  );
}

export default App;
