import React from "react";
import "./AboutMe.css";
import myImage from "../assets/my-image.jpeg";  // Update path to your image
import myresume from "../assets/yashresume.pdf";  // Update path to your resume

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* Center the contents of this box */}
      <div className="info-box inner-glow text-center">
        <h2>About Me</h2>
        <p>
        A passionate and driven B.Tech student with a focus on software engineering. I have hands-on experience in designing and developing web applications using modern technologies like React.js, Node.js, Express.js, and MongoDB. My skills extend to both front-end and back-end development, and I'm proficient in creating RESTful APIs. I thrive in Agile/Scrum environments and am eager to apply my abilities to create impactful solutions.  I am particularly interested in leveraging my skills in areas like data backhaul and meter data management.
        </p>
        <a
          href={myresume}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >My Resume</a>
      </div>
      <div className="image-box inner-glow">
        <img src={myImage} alt="Me" className="natural-img" />
      </div>
    </div>
  );
};

export default AboutMe;
