import logo from "./logo.svg";
import "./assets/css/styles.css";
import Profile from "./assets/img/Wensy2.jpg";

function App() {
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
      {/* Font Awesome icons (free version)*/}
      {/* Google fonts*/}
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
      {/* Core theme CSS (includes Bootstrap)*/}
      <link href="css/styles.css" rel="stylesheet" />
      {/* Navigation*/}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Wensy Sompa</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
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
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">
                Awards
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Page Content*/}
      <div className="container-fluid p-0">
        {/* About*/}
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
              hardware and software repairs, as well as troubleshooting devices
              of various brands and models..
            </p>
            <div className="social-icons">
              <a className="social-icon" href="#!">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-github" />
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-twitter" />
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Experience*/}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Mahasiswa</h3>
                <div className="subheading mb-3">Universitas Klabat</div>
                <p>
                  Sebagai seorang mahasiswa, saya telah memperoleh keterampilan
                  dan pengetahuan di berbagai bidang yang mendukung kemampuan
                  saya dalam bekerja di dunia profesional. Saya terlibat dalam
                  berbagai kegiatan yang mengembangkan kemampuan pemecahan
                  masalah dan pemikiran kritis. Selain itu, saya berpartisipasi
                  dalam proyek-proyek yang mendorong penerapan teknologi dan
                  inovasi untuk menciptakan solusi yang efektif dan efisien..
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">March 2013 - Present</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Freelance Web Developer</h3>
                <div className="subheading mb-3">Universitas Klabat</div>
                <p>
                  Sebagai seorang Freelance Web Developer, saya mengambil
                  inisiatif untuk menangani berbagai proyek pengembangan website
                  dan aplikasi web. Saya fokus pada identifikasi peluang untuk
                  meningkatkan fungsionalitas dan kinerja aplikasi dengan
                  memanfaatkan teknologi terbaru. Selama masa ini, saya juga
                  bekerja untuk mengoptimalkan alur kerja dan menyempurnakan
                  pengalaman pengguna melalui pendekatan yang lebih efisien,
                  termasuk pengujian beta untuk memaksimalkan dampak dan hasil
                  proyek..
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">December 2011 - March 2013</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Teknisi Smartphone</h3>
                <div className="subheading mb-3">Kai Cell</div>
                <p>
                  Saya bertanggung jawab untuk melakukan perbaikan dan
                  pemeliharaan perangkat smartphone. Saya bekerja dengan
                  berbagai perangkat dan sistem operasi untuk memastikan
                  fungsionalitas perangkat yang optimal. Saya juga terlibat
                  dalam manajemen perubahan operasional dan penerapan teknologi
                  untuk meningkatkan efisiensi proses kerja. Dalam peran ini,
                  saya berfokus pada perbaikan masalah teknis dan memberikan
                  solusi yang cepat dan akurat, sambil meningkatkan layanan
                  pelanggan dan hasil jangka panjang.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">July 2010 - December 2011</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Manager Restoran</h3>
                <div className="subheading mb-3">
                  RM Sabrina Seafood and Resto
                </div>
                <p>
                  Saya memimpin tim dalam mengelola operasi sehari-hari dan
                  memastikan bahwa layanan pelanggan berjalan dengan lancar.
                  Saya terlibat dalam pengelolaan pasar dan jaringan yang
                  memberdayakan proses operasional restoran, sambil memastikan
                  kualitas layanan tetap tinggi. Saya bekerja untuk
                  memaksimalkan efisiensi dan menciptakan lingkungan yang
                  memungkinkan tim untuk mencapai tujuan bersama, serta
                  menciptakan pengalaman positif bagi pelanggan melalui
                  manajemen yang dinamis.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">September 2008 - June 2010</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Education*/}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">SMA Prisma Manado</h3>
                <div className="subheading mb-3">Ilmu Pengetahuan Sosial</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Juli 2015 - May 2018</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Universitas Klabat</h3>
                <div className="subheading mb-3">Sistem Informasi</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Agustus 2019 - Mei 2025</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Skills*/}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-angular" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-less" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-wordpress" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-gulp" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-grunt" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm" />
              </li>
            </ul>
            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Cross Browser Testing &amp; Debugging
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Cross Functional Teams
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Agile Development &amp; Scrum
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
        {/* Interests*/}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors. In the winter, I am an avid skier and novice ice
              climber. During the warmer months here in Colorado, I enjoy
              mountain biking, free climbing, and kayaking.
            </p>
            <p className="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre
              movies and television shows, I am an aspiring chef, and I spend a
              large amount of my free time exploring the latest technology
              advancements in the front-end web development world.
            </p>
          </div>
        </section>
        <hr className="m-0" />
        {/* Awards*/}
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Awards &amp; Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning" />
                </span>
                Google Analytics Certified Developer
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning" />
                </span>
                Mobile Web Specialist - Google Certification
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning" />
                </span>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2009
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning" />
                </span>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Adobe Creative Jam 2008
                (UI Design Category)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning" />
                </span>
                2<sup>nd</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2008
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning" />
                </span>
                1<sup>st</sup>
                Place - James Buchanan High School - Hackathon 2006
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning" />
                </span>
                3<sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005
              </li>
            </ul>
          </div>
        </section>
      </div>
      {/* Bootstrap core JS*/}
      {/* Core theme JS*/}
    </div>
  );
}

export default App;
