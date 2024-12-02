import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Resume from "../assets/docs/Nikhil_Resume.pdf";
// import { useTheme } from "../context/ThemeContext"; 
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
function Home() {
  // const [theme, setTheme] = useTheme();
  // const handleTheme = () => {
  //   setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  // };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        {/* <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <FaMoon size={30} />
          ) : (
            <IoSunnyOutline size={30} />
          )}
        </div> */}
        <div className="container home-content">
          <h2>Hi 👏I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Programmer!",
                  "Mern Stack Developer!",
                  "ML enthusiast!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-button">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="Nikhil.pdf">
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
