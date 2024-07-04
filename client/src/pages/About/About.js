import React from "react";
import "./about.css";
import profilePic from "../../assests/images/me.png";
import Jump from 'react-reveal/Jump';
const About = () => {
  return (
    <>
    <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilePic} alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              I have successfully achieved my goals in my life, I am going to
              present my qualification and personal information.
              <br />
              Working as a Web Developer since last two years, I have 4-year
              degree of BS(Hons) in Physics, I think. I can survive in any
              company and in any situation I believe myself as a professional
              web developer. I have learned following skills while working as a
              developer.
              <ul>
                <li>To manage large scale business application</li>
                <li>To manage database especially (Mongodb)</li>
              </ul>
              I have the hunger to work with new technologies especially express
              frameworks. I can design, build and maintain the website from
              scratch using my experiences.
              <br />
              I am having the following skills
              <br />
              <b>HTML, CSS, React JS, JavaScript, Express, Node Js, Mongodb.</b>
              Using these technologies I can design, build, maintain website's
              also I can also apply new technologies.
            </p>
          </div>
        </div>
      </div>
      </Jump>
    </>
  );
};

export default About;
