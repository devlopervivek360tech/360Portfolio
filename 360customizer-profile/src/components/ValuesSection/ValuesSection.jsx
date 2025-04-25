import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ValuesSection.css";

function ValuesSection({ setActiveSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (isInView) {
    setActiveSection("values");
  }

  const values = [
    { name: "Customer Focus", icon: "💖" },
    { name: "Creativity & Innovation", icon: "✨" },
    { name: "Quality & Detail", icon: "🔍" },
    { name: "Collaboration", icon: "🤝" },
    { name: "Accountability", icon: "✅" },
  ];

  return (
    <section ref={ref} className="values-section" id="values">
      <div className="values-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Our <span>Values</span> and Actions
        </motion.h2>

        <motion.div
          className="values-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={`value-${index}`}
              className="value-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ValuesSection;
