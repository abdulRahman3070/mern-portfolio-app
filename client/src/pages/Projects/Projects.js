import React from "react";
import "./projects.css";
import project1 from "../../assests/images/project1.png";
import project2 from "../../assests/images/project2.png";
import project3 from "../../assests/images/project3.png";

const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="mb-3 text-center">
          The MERN Stack Shopping App is a comprehensive e-commerce platform
          with user authentication, product listings, detailed product pages, a
          shopping cart, and an admin panel for managing products, orders, and
          users. The Calculator, built with JavaScript, HTML, and CSS, performs
          basic arithmetic operations with a user-friendly interface ensuring
          quick and accurate results. The Simon Says Game, developed using
          JavaScript, HTML, and CSS, is an interactive memory game where players
          repeat sequences of colors and sounds that grow progressively complex,
          enhancing memory skills through increasing levels of difficulty.
        </p>
        {/* Card Design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src={project2} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">Tailwind CSS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                   Simon Says Game
                  </h5>
                </div>
                <a className="ad-btn" href="https://github.com/abdulRahman3070/Simon-Says-Game">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={project1} alt="project2" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">Node js</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React js</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                  Ecommerce Mern App
                  </h5>
                </div>
                <a className="ad-btn" href="https://github.com/abdulRahman3070/Mern--Ecommerace-app">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={project3} alt="project1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Node js</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React js</span>
                <span className="card-detail-badge">Mongodb</span>
                <span className="card-detail-badge">Core-Js</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                   Mern Portfolio Project
                  </h5>
                </div>
                <a className="ad-btn" href="https://abdulrahman786.netlify.app/">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
