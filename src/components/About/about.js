import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <div>
      <div className="container-fluid p-0"></div>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            {about.about1}
            <span className="text-primary">{about.about2}</span>
          </h1>
          <div className="subheading mb-5">
            {about.about3}
            <a href="wensysompa86@gmail.com">{about.about4}</a>
          </div>
          <p className="lead mb-5">{about.about5}</p>
          <div className="social-icons">
            <a className="social-icon" href="#!">
              <i className="fab fa-whatsapp" />
            </a>
            <a className="social-icon" href="#!">
              <i className="fab fa-github" />
            </a>
            <a className="social-icon" href="#!">
              <i className="fab fa-instagram" />
            </a>
            <a className="social-icon" href="#!">
              <i className="fab fa-facebook-f" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
