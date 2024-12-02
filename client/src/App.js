import logo from "./logo.svg";
import "./App.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Layout from "./components/layouts/Layout";
import About from "./pages/About";
import WorkExp from "./pages/workExp/WorkExp";
import TechStack from "./pages/Techstack/TechStack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Education";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
// import { useTheme } from "./context/ThemeContext";
function App() {
  // const [theme] = useTheme();
  return (
    <>
      <div>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3 ">
          <h4 text-center>
            Created by:Nikhil Baghel ,Personal Portfolio &copy;2024
          </h4>
        </div>
      </div>
    </>
  );
}

export default App;
