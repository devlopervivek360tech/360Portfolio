import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./TeamSection.css";

function TeamSection({ setActiveSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (isInView) {
    setActiveSection("team");
  }

  const teamMembers = [
    { name: "Nilesh Ranaware", role: "Founder & CEO", image: "nilesh.jpg" },
    { name: "John Doe", role: "Creative Director", image: "team1.jpg" },
    { name: "Jane Smith", role: "Production Head", image: "team2.jpg" },
    { name: "Mike Johnson", role: "Sales Manager", image: "team3.jpg" },
  ];

  const teamEvents = [
    { title: "Annual Day", image: "annual-day.jpg" },
    { title: "Team Outings", image: "team-outing.jpg" },
    { title: "Festive Celebrations", image: "diwali.jpg" },
    { title: "Award Nights", image: "awards.jpg" },
  ];

  return (
    <section ref={ref} className="team-section" id="team">
      <div className="team-container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Our <span>Team</span> of Customizers
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          360Customizer isn't just a company; it's a family of diverse talents
          united by a shared passion for excellence.
        </motion.p>

        <motion.div
          className="team-members"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={`member-${index}`}
              className="member-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="member-image">
                <img src={`/assets/images/${member.image}`} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="gallery-title"
        >
          Our <span>Moments</span>
        </motion.h3>

        <motion.div
          className="team-gallery"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {teamEvents.map((event, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={`/assets/images/${event.image}`} alt={event.title} />
              <div className="overlay">
                <h4>{event.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TeamSection;
