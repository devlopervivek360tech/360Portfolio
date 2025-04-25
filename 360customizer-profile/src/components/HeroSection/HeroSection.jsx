import React from "react";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import ThreeDModel from "./ThreeDModel";
import "./HeroSection.css";

function HeroSection({ setActiveSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      setActiveSection("home");
    }
  }, [isInView]);

  return (
    <section ref={ref} className="hero-section" id="home">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Make Your <span>Mark</span> With 360Customizer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            Empowering self-expression through personalized merchandise, making
            customization accessible to everyone, everywhere.
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="primary-btn">Explore Products</button>
            <button className="secondary-btn">Contact Us</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-model"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <ThreeDModel />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
