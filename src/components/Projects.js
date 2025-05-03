import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Pet Adoption Web App</h3>
          <p className="project-period">Sep 2023 – Present</p>
          <ul className="project-details">
            <li>Responsive UI connecting users with animal shelters for adoptions.</li>
            <li>User authentication, pet profiles, advanced filtering & search.</li>
            <li>Built with React.js, Node.js, Express.js & MongoDB.</li>
            <li>RESTful APIs for seamless front-end/back-end data exchange.</li>
          </ul>
        </div>
        <div className="project-card">
          <h3>Face Recognition System</h3>
          <p className="project-period">Mar 2024 – Aug 2024</p>
          <ul className="project-details">
            <li>Real-time biometric facial detection & identity matching.</li>
            <li>OpenCV & Dlib for accurate, efficient recognition.</li>
            <li>Python ML techniques for enhanced security & access control.</li>
          </ul>
        </div>
        <div className="project-card">
          <h3>Smart Competency Diagnostic & Profile Score</h3>
          <p className="project-period">Ongoing</p>
          <ul className="project-details">
            <li>Platform for post-10th students: career guidance via diagnostic tests.</li>
            <li>Coursera integration to recommend courses by skill assessment.</li>
            <li>Job application tools and ATS-score suggestions via Gemini API.</li>
            <li>Stack: React, Node.js, MongoDB, HTML/CSS.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
