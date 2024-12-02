import React from "react";
import "./Menus.css";
import { ImHome } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { TbCircleLetterE } from "react-icons/tb";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
function Menus({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="/images/profile.jpg" alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <ImHome />
                  Home
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                  About
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdOutlineCastForEducation />
                  Education
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GiSkills />
                  Skills
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GoProjectSymlink />
                  Projects
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <TbCircleLetterE />
                  Experience
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdOutlineContactPhone />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <ImHome />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdOutlineCastForEducation />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GiSkills />
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GoProjectSymlink />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <TbCircleLetterE />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdOutlineContactPhone />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menus;
