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
        <a onClick={() => handleSelect("JavaScript", "JavaScript is a high-level, interpreted language...")}>JavaScript</a>
        <a onClick={() => handleSelect("Java", "Java is a strongly typed, object-oriented language...")}>Java</a>
        <a onClick={() => handleSelect("Python", "Python is a versatile scripting language...")}>Python</a>
        <a onClick={() => handleSelect("C/C++", "C and C++ are powerful, compiled languages...")}>C/C++</a>
        <a onClick={() => handleSelect("React.js", "React is a component-based library for building UIs...")}>React.js</a>
        <a onClick={() => handleSelect("Node.js", "Node.js enables JS on the server side...")}>Node.js</a>
        <a onClick={() => handleSelect("HTML", "HTML defines the structure of web pages...")}>HTML</a>
        <a onClick={() => handleSelect("CSS", "CSS controls the styling of web pages...")}>CSS</a>
        <a onClick={() => handleSelect("SQL", "SQL is used to query relational databases...")}>SQL</a>
        <a onClick={() => handleSelect("MongoDB", "MongoDB is a document-oriented NoSQL database...")}>MongoDB</a>
        <a onClick={() => handleSelect("Git", "Git is a version control system for source code...")}>Git</a>
        <a onClick={() => handleSelect("GitHub", "GitHub hosts Git repositories for collaboration...")}>GitHub</a>
        <a onClick={() => handleSelect("Docker", "Docker packages apps into containers...")}>Docker</a>
        <a onClick={() => handleSelect("Jenkins", "Jenkins automates software build, test, and deploy...")}>Jenkins</a>
        <a onClick={() => handleSelect("AWS", "AWS provides scalable cloud services...")}>AWS</a>
        <a onClick={() => handleSelect("Agile", "Agile is a flexible, iterative development approach...")}>Agile</a>
        <a onClick={() => handleSelect("DevOps", "DevOps bridges development and operations...")}>DevOps</a>
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
