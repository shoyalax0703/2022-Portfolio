import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faComments, faDiagramProject, faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="py-5"> experiences</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faLinux} size="2x" />
                </div>
                <h3>Linux</h3>
                <p>
                  Did study hard and got LFCS(Linux Foundation Certified System
                  Admin).
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
              <div className="circle">
                  <FontAwesomeIcon icon={faMicrophoneLines} size="2x" />
                </div>
                <h3>Event Planning</h3>
                <p>
                  Managed many live training with the various topics (not only
                  tech also soft skill-related topics).
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
              <div className="circle">
                  <FontAwesomeIcon icon={faDiagramProject} size="2x" />
                </div>
                <h3>Project Management</h3>
                <p>
                  Delivered six-critical process training to over 200 ppl and
                  made them complete 100% of taking courses.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="box">
              <div className="circle">
                  <FontAwesomeIcon icon={faComments} size="2x" />
                </div>
                <h3>Communication</h3>
                <p>
                  Collaborated with various stakeholders and made good
                  relationships with them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Experience;
