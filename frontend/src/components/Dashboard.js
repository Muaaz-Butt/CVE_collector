// frontend/src/components/Dashboard.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-navbar">
        <div className="dashboard-logo">CVE Collector</div>
        <div className="user-controls">
          <span className="welcome-text">Welcome, {currentUser?.username || "User"}</span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Your CVE Dashboard</h1>
        </div>
        
        <div className="stats-cards">
          <div className="stat-card">
            <h3>Total CVEs</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h3>High Severity</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h3>Last Updated</h3>
            <p className="stat-time">Never</p>
          </div>
        </div>
        
        <div className="dashboard-placeholder">
          <h2>Ready to start tracking vulnerabilities</h2>
          <p>
            You'll soon be able to search, filter, and track CVEs from here.
            Coming in Phase 2 & 3 of your project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;