import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="  shadow-lg p-3 mb-5 bg-white rounded about" id="about">
        <div className="row">
          <div className="col-md-6  col-xl-6 co-lg-6 col-xs-12 about-img">
            <img src="/images/profile.jpg" alt="profile pic" />
          </div>
          <div className="col-md-6  col-xl-6 co-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              As a dedicated and passionate technologist, I am currently
              pursuing a B.Tech in Data Science and Artificial Intelligence at
              IIIT Dharwad, with a strong academic record of 8.96 CGPA. My
              journey is driven by a love for solving real-world problems using
              technology. I have hands-on experience in machine learning, web
              development, and dashboard creation, gained through internships at
              Tata Motors and Suvidha Foundation, where I applied my skills in
              Power BI, MySQL, and custom ML models.
            </p>

            <p>
              My project portfolio includes building intelligent systems like
              virtual assistants promoting mental health, advanced weather image
              classification using CNN and Vision Transformers, and interactive
              dashboards. I am familiar with tools like Python, React, Node.js,
              and databases such as MySQL and MongoDB.
            </p>

            <p>
              I have also demonstrated my problem-solving capabilities with over
              700+ DSA questions solved on LeetCode and hold certifications in
              Machine Learning and AI. With a blend of technical expertise and a
              growth mindset, I am eager to contribute to innovative projects
              that make a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
