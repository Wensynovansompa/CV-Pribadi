import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Experience = () => {
  const [experience, setExperience] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const experienceRef = ref(db, "experience");
    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      setExperience(data);
    });
  }, []);
  return (
    <div>
      <hr className="m-0" />
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">{experience.experience1}</h2>-
          {/* Final Year Project */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">{experience.experience2}</h3>
              <div className="subheading mb-3">{experience.experience3}</div>
              <p>{experience.experience4}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{experience.experience5}</span>
            </div>
          </div>
          {/* Freelance Web Developer */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">{experience.experience6}</h3>
              <div className="subheading mb-3">{experience.experience7}</div>
              <p>{experience.experience8}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{experience.experience9}</span>
            </div>
          </div>
          {/* Teknisi Smartphone */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">{experience.experience10}</h3>
              <div className="subheading mb-3">{experience.experience11}</div>
              <p>{experience.experience12}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{experience.experience13}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
