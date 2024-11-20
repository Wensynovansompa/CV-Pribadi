import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Interests = () => {
  const [interests, setInterests] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const interestsRef = ref(db, "interests");
    onValue(interestsRef, (snapshot) => {
      const data = snapshot.val();
      setInterests(data);
    });
  }, []);
  return (
    <div>
      <hr className="m-0" />
      <section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5">{interests.interests1}</h2>
          <p style={{ fontSize: "22px" }}>{interests.interests2}</p>
          <p style={{ fontSize: "22px" }}>{interests.interests3}</p>
          <p style={{ fontSize: "22px" }}>{interests.interests4}</p>
          <p style={{ fontSize: "22px" }}>{interests.interests5}</p>
        </div>
      </section>
    </div>
  );
};
export default Interests;
