import React, { useState } from "react";
import "./Skills.css";

function Skills() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (skill, description) => {
    setSelected({ skill, description });
  };

  return (
    <section className="skills-section">
      <h2 className="section-heading">Skills</h2>
      <div className="skills-list">
        <button onClick={() => handleSelect("JavaScript", "JavaScript is a high-level, interpreted language...")}>JavaScript</button>
        <button onClick={() => handleSelect("Java", "Java is a strongly typed, object-oriented language...")}>Java</button>
        <button onClick={() => handleSelect("Python", "Python is a versatile scripting language...")}>Python</button>
        <button onClick={() => handleSelect("C/C++", "C and C++ are powerful, compiled languages...")}>C/C++</button>
        <button onClick={() => handleSelect("React.js", "React is a component-based library for building UIs...")}>React.js</button>
        <button onClick={() => handleSelect("Node.js", "Node.js enables JS on the server side...")}>Node.js</button>
        <button onClick={() => handleSelect("HTML", "HTML defines the structure of web pages...")}>HTML</button>
        <button onClick={() => handleSelect("CSS", "CSS controls the styling of web pages...")}>CSS</button>
        <button onClick={() => handleSelect("SQL", "SQL is used to query relational databases...")}>SQL</button>
        <button onClick={() => handleSelect("MongoDB", "MongoDB is a document-oriented NoSQL database...")}>MongoDB</button>
        <button onClick={() => handleSelect("Git", "Git is a version control system for source code...")}>Git</button>
        <button onClick={() => handleSelect("GitHub", "GitHub hosts Git repositories for collaboration...")}>GitHub</button>
        <button onClick={() => handleSelect("Docker", "Docker packages apps into containers...")}>Docker</button>
        <button onClick={() => handleSelect("Jenkins", "Jenkins automates software build, test, and deploy...")}>Jenkins</button>
        <button onClick={() => handleSelect("AWS", "AWS provides scalable cloud services...")}>AWS</button>
        <button onClick={() => handleSelect("Agile", "Agile is a flexible, iterative development approach...")}>Agile</button>
        <button onClick={() => handleSelect("DevOps", "DevOps bridges development and operations...")}>DevOps</button>
      </div>

      {selected && (
        <div className="skill-info">
          <h3>{selected.skill}</h3>
          <p>{selected.description}</p>
        </div>
      )}
    </section>
  );
}

export default Skills;
