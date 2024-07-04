import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assests/docs/Abdul Rahman CV.pdf";
import { IoIosMoon } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import Fade from 'react-reveal/Fade';

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Handle Theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <IoIosMoon size={25} /> : <MdOutlineWbSunny size={25} />}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Mern Stack Developer",
                    "With Expertise in HTML, CSS, JavaScript",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=923043637810"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="Abdul Rahman CV.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
