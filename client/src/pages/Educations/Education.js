import React from "react";
import "./Education.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
function Education() {
  return (
    <>
      <div className="container education"id="education">
        <h2 className=" mt-3 mb-1 text-center text-uppercase">
          My education
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "grey", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021 - present"
            iconStyle={{ background: "grey", color: "black" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">
              Final year undergraduate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Btech in DSAI
            </h4>
            <p>IIIT Dharwad,Karnataka</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "grey", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020-2019"
            iconStyle={{ background: "grey", color: "black" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Secondary
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              PCMC
            </h4>
            <p>City Composite PU College,Karnataka</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "grey", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018"
            iconStyle={{ background: "grey", color: "black" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              High School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ICSE Board
            </h4>
            <p>Sacred Heart Convent School,Uttar Pradesh</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Education;
