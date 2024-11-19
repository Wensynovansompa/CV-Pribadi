import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () => {
  return (
    <div>
      <hr className="m-0" />
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-2">Skills</h2>
          <div className="subheading mb-3">
            Programming Languages & Smartphone Technician
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-vuejs"></i>
              </li>
            </ul>
          </div>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Front-End Coding
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Repair Hardware & Software
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Web Development
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Web Design
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Skills;
