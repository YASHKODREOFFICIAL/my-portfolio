import React from "react";
import "./Achievements.css";  // Optional: If you want to style the Achievements section with specific CSS

const achievements = [
  "1st Place Visionary Hackathon 2023",
  "3rd Place Visionary Techfest 2025",
  "1st Place (Web Dev), 2nd Place (ML) National Science Day Hackathon 2025",
  "Web Development MITU Skillologies",
  "Cybersecurity - IBM",
  "Network Security University of Colorado",
  "In-Plant Training CUB TO KING IT Solution Pvt. Ltd.",
  "Offer Letter Sadhana IT Solution",
];

function Achievements() {
  return (
    <div className="achievements-section">
      <h2 className="section-heading">Certifications & Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((item, index) => (
          <li key={index} className="achievement-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
