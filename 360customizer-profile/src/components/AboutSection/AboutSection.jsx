import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AboutSection.css";

function AboutSection({ setActiveSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (isInView) {
    setActiveSection("about");
  }

  return (
    <section ref={ref} className="about-section" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="about-content">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-title"
          >
            We Are <span>360Customizer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="section-subtitle"
          >
            More than just a brand - We're a belief, a movement towards
            self-expression and empowerment.
          </motion.p>

          <motion.div
            className="about-text"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>
              At 360Customizer, we believe every individual and business is
              uniquely extraordinary. As a brand under Namrup Fashion Pvt Ltd,
              we are driven by the conviction that each person and business
              possesses distinctive characteristics that deserve to be
              celebrated.
            </p>
            <p>
              Our aim is to provide a platform where individuals and businesses
              can express themselves through customized merchandise, gifts, and
              accessories tailored to their tastes, needs, and branding
              requirements.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="image-wrapper">
            <div className="floating-box box1"></div>
            <div className="floating-box box2"></div>
            <div className="floating-box box3"></div>
            <div className="main-image"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
