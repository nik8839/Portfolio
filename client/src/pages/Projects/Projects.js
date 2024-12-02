import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                {/* <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  /> */}
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Dashboard</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/nik8839/Dashboard"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Mental health support system
                </span>
                {/* <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  /> */}
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">Flask api</span>
                <span className="card-detail-badge">Distillbert</span>
                <span className="card-detail-badge">
                  Supervised ML algorithms
                </span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">ML</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/nik8839/GFG_PROJECT"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Weather image classification
                </span>
                {/* <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  /> */}
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">CNN</span>
                {/* <span className="card-detail-badge"></span>
                <span className="card-detail-badge">Mongodb</span> */}
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">ML</h6>
                </div>
                <a className="ad-btn" href="">
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
