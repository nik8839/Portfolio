import React from "react";
import "./TechStack.css";
import { TechstackList } from "../../utils/TechstackList";
function TechStack() {
  return (
    <div>
      <>
        <div className="container techstack" id="techstack">
          <h2 className="col-12 mt-3 mb-1 text-center">Technologies Stack</h2>
          <hr />
          <p className="pb-3 text-center">
            🤠Including Programming in C++ , frameworks ,database,front-end and
            backened tools and APIs
          </p>
          <div className="row">
            {TechstackList.map((tech) => (
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default TechStack;
