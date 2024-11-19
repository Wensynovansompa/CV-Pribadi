import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [About, setAbout] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const AboutRef = ref(db, "about/");
    onValue(AboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <div className="container-fluid p-0"></div>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Wensy
            <span className="text-primary"> Sompa</span>
          </h1>
          <div className="subheading mb-5">
            95371 Jl. Sukur-Likupang, Minahasa Utara, Sulawesi Utara · (+62)
            8953-4005-3177 ·
            <a href="wensysompa86@gmail.com">wensysompa86@gmail.com</a>
          </div>
          <p className="lead mb-5">
            I have extensive experience in mobile phone servicing, including
            hardware and software repairs, as well as troubleshooting devices of
            various brands and models. In addition to my technical expertise in
            device servicing, I have developed strong skills in front-end
            development, including creating responsive and user-friendly
            websites using HTML, CSS, JavaScript, and modern frameworks. This
            combination of skills allows me to approach technical challenges
            with a holistic perspective, blending hardware troubleshooting with
            software solutions.
          </p>
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
