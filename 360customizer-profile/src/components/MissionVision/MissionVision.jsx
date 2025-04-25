/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./MissionVision.css";

function MissionVision({ setActiveSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (isInView) {
    setActiveSection("mission");
  }

  const cards = [
    {
      title: "Our Vision",
      content:
        "Becoming the world's leading choice for customized merchandise, empowering individuals and businesses to express their unique identities proudly.",
      icon: "👁️",
    },
    {
      title: "Our Mission",
      content:
        "Empowering self-expression through personalized merchandise, making customization accessible to everyone, everywhere.",
      icon: "🎯",
    },
    {
      title: "Our Story",
      content:
        "From humble beginnings in Pune to securing Fortune 500 clients, our journey has been about transforming visions into reality through creativity and dedication.",
      icon: "📖",
    },
  ];

  return (
    <section ref={ref} className="mission-section" id="mission">
      <div className="mission-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Our <span>Purpose</span> and Promise
        </motion.h2>

        <div className="cards-container">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              key={`card-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
