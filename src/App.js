import "./assets/css/styles.css";
import Profile from "./assets/img/Wensy2.jpg";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Educations from "./components/Educations/educations";
import Interest from "./components/Interest/interest";
import Skills from "./components/Skills/skills";

const App = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content />
      <meta name="author" content />
      <title>CV Pribadi</title>
      <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
        rel="stylesheet"
        type="text/css"
      />
      <link href="css/styles.css" rel="stylesheet" />
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Wensy Sompa</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-20"
              src={Profile}
              alt="profile"
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interest">
                Interests
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <About />
      <Experience />
      <Educations />
      <Interest />
      <Skills />
    </div>
  );
};

export default App;
