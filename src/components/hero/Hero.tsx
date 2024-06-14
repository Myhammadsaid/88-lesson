import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hero"
      >
        <div className="container">
          <div className="hero__style">
            <h1 className="hero__text">Who we are and what we do</h1>
            <p className="hero__par">
              Here you can find a lot of interesting and useful information that
              you need in gardening and creating a beautiful garden
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
