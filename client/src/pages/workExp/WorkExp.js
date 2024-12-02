import React from "react";
import { SiReact } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import { SiTata } from "react-icons/si";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Internships
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="June 2024-July 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiTata />}
            >
              <h3 className="vertical-timeline-element-title">AI/ML intern</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Tata Motors Limited Dharwad
              </h4>
              <p>
                Responsible for providing responsive dashboard created using
                Power BIDesktop . The dashboard provides interactive elements
                providing real time visualization based on time line and
                attributes selected.
              </p>
              <a href="https://drive.google.com/file/d/1WmM3HNthOESn-4joZziYtob5tX0kmKL4/view?usp=sharing">
                Completion Certificate
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="March 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<GiArtificialIntelligence />}
            >
              <h3 className="vertical-timeline-element-title">ML intern</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Suvidha Foundation ,Maharashtra
              </h4>
              <p>
                Worked on data collection from different news sources then
                worked on simulating abstractive summarization Pegasus model of
                news.
              </p>
              <a href="https://drive.google.com/file/d/1bDLpL_E2sRdtclYF8AzzKuTSGQ4skTmO/view?usp=sharing">
                Internship completion
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
