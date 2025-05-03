import React, { useState } from "react";
import "./Education.css"; // Import the CSS file for styling

function Education() {
  const [selected, setSelected] = useState("SSC"); // Default section to show is SSC

  return (
    <section className="education-section">
      <h2 className="section-heading">Education</h2>

      <div className="education-buttons">
        <button
          onClick={() => setSelected("SSC")}
          className={`education-button ${selected === "SSC" ? "active" : ""}`}
        >
          SSC
        </button>
        <button
          onClick={() => setSelected("Diploma")}
          className={`education-button ${selected === "Diploma" ? "active" : ""}`}
        >
          Diploma
        </button>
        <button
          onClick={() => setSelected("BTech")}
          className={`education-button ${selected === "BTech" ? "active" : ""}`}
        >
          B.Tech
        </button>
      </div>

      {selected === "SSC" && (
        <div className="education-info">
          <h3>SCSV Belwandi BK, Maharashtra Board</h3>
          <p>SSC (10th Grade)</p>
          <p>2015-2020</p>
          <p>86.40 Percent</p>
        </div>
      )}

      {selected === "Diploma" && (
        <div className="education-info">
          <h3>Pimpri Chinchwad Polytechnic, MSBTE</h3>
          <p>Diploma in Information Technology</p>
          <p>Jan 2021 - Jun 2023</p>
          <p>79 Percent</p>
        </div>
      )}

      {selected === "BTech" && (
        <div className="education-info">
          <h3>Vishwakarma University, Pune</h3>
          <p>B.Tech in Information Technology</p>
          <p>Sep 2024 - Present</p>
          <p>Expected Graduation: 2026</p>
          <p>7.4 CGPA</p>
        </div>
      )}
    </section>
  );
}

export default Education;
