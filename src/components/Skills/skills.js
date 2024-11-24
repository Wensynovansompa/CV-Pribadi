import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Skills = () => {
  const [skills, setSKills] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const skillsRef = ref(db, "skills");
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      setSKills(data);
    });
  }, []);
  return (
    <div>
      <hr className="m-0" />
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-2">{skills.skills1}</h2>
          <div className="subheading mb-3">
            {skills.skills2}
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
          <div className="subheading mb-3">{skills.skills3}</div>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              {skills.skills4}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              {skills.skills5}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              {skills.skills6}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              {skills.skills7}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Skills;
