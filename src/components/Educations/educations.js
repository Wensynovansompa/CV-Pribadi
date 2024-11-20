import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Educations = () => {
  const [educations, setEducations] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const educationsRef = ref(db, "educations");
    onValue(educationsRef, (snapshot) => {
      const data = snapshot.val();
      setEducations(data);
    });
  }, []);
  return (
    <div>
      <hr className="m-0" />
      <section className="resume-section" id="educations">
        <div className="resume-section-content">
          <h2 className="mb-5">{educations.educations1}</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">{educations.educations2}</h3>
              <div className="subheading mb-3">{educations.educations3}</div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{educations.educations4}</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">{educations.educations5}</h3>
              <div className="subheading mb-3">{educations.educations6}</div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{educations.educations7}</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">{educations.educations8}</h3>
              <div className="subheading mb-3">{educations.educations9}</div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{educations.educations10}</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">{educations.educations11}</h3>
              <div className="subheading mb-3">{educations.educations12}</div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{educations.educations13}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Educations;
