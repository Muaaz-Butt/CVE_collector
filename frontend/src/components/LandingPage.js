import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const logoRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (logoRef.current && taglineRef.current) {
        logoRef.current.classList.add("active");
        taglineRef.current.classList.add("active");
      }
    }, 300);
  }, []);

  return (
    <div className="landing-container">
      <div className="navbar">
        <div className="logo">IRIS</div>
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

        <div className="text-logo-container">
          <h1 className="iris-text-logo" ref={logoRef}>IRIS</h1>
          <p className="iris-tagline" ref={taglineRef}>Vision into Vulnerabilities</p>
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