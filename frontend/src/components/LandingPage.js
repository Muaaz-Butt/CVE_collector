// frontend/src/components/LandingPage.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const irisRef = useRef(null);

  useEffect(() => {
    // Add animation class after component mounts for the animation to trigger
    setTimeout(() => {
      if (irisRef.current) {
        irisRef.current.classList.add("active");
      }
    }, 300);
  }, []);

  return (
    <div className="landing-container">
      <div className="navbar">
        <div className="logo">CVE Collector</div>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-login">
            Log In
          </Link>
          <Link to="/register" className="btn btn-signup">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h1>CVE Intelligence Platform</h1>
          <p>Track, analyze and manage Common Vulnerabilities and Exposures with ease</p>
          <Link to="/register" className="btn btn-cta">
            Get Started
          </Link>
        </div>

        <div className="iris-container">
          <div className="iris" ref={irisRef}>
            <div className="iris-inner"></div>
            <div className="iris-mid"></div>
            <div className="iris-outer"></div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Real-time CVE Updates</h3>
            <p>Stay informed with the latest vulnerabilities as they're published</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Advanced Filtering</h3>
            <p>Find exactly what you're looking for with powerful search filters</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analysis Dashboard</h3>
            <p>Visualize trends and gain insights from vulnerability data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;