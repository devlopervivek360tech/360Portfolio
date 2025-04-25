import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-logo">
            <h2>
              360<span>Customizer</span>
            </h2>
            <p>
              Where Affordability Meets Reliability, Crafting Enduring
              Excellence
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#mission">Mission</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Custom Apparel</a>
                </li>
                <li>
                  <a href="#">Corporate Gifts</a>
                </li>
                <li>
                  <a href="#">Branded Merchandise</a>
                </li>
                <li>
                  <a href="#">Bulk Orders</a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Shipping Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} 360Customizer. All Rights
            Reserved.
          </p>
          <p>A Brand of Namrup Fashion Pvt Ltd</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
