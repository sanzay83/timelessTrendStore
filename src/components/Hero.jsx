// src/components/Hero.js
import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <h1>TIMELESS TRENDS: WHERE COMFORT MEETS FASHION.</h1>
    </section>
  );
};

export default Hero;
