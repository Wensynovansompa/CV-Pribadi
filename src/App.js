import logo from "./logo.svg";
import "./assets/css/styles.css";
import Profile from "./assets/img/Wensy2.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
              <a className="nav-link js-scroll-trigger" href="#Tentang saya">
                Tentang Saya
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#Pengalaman">
                pengalaman
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#Pendidikan">
                Pendidikan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#Keahlian">
                Keahlian
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#Hobi">
                Hobi
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Page Content*/}
      <div className="container-fluid p-0">
        {/* About*/}
        <section className="resume-section" id="Tentang saya">
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
        <section className="resume-section" id="Pengalaman">
          <div className="resume-section-content">
            <h2 className="mb-5">Pengalaman</h2>
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
                <span className="text-primary">Juli 2019 - Present</span>
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
                <span className="text-primary">Desember 2022 - Maret 2023</span>
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
                <span className="text-primary">Juli 2021 - Desember 2023</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Education*/}
        <section className="resume-section" id="Pendidikan">
          <div className="resume-section-content">
            <h2 className="mb-5">Pendidikan</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">SD Advent Tanawangko</h3>
                <div className="subheading mb-3">Sekolah Dasar </div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Juli 2007 - juni 2012</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">SMP Advent Tanawangko</h3>
                <div className="subheading mb-3">Sekolah Menegah Pertama </div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Juli 2012 - juni 2015</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">SMA Prisma Manado</h3>
                <div className="subheading mb-3">Ilmu Pengetahuan Sosial</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Juli 2015 - Mei 2018</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Universitas Klabat</h3>
                <div className="subheading mb-3">Sistem Informasi</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Juli 2019 - Present</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Skills*/}
        <section className="resume-section" id="Keahlian">
          <div className="resume-section-content">
            <h2 className="mb-2">Keahlian</h2>
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
                  <i class="fab fa-wordpress"></i>
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
        <hr className="m-0" />
        {/* Interests*/}
        <section className="resume-section" id="Hobi">
          <div className="resume-section-content">
            <h2 className="mb-5">Hobi</h2>
            <p>Mendengarkan Musik</p>
            <p>Karaoke </p>
            <p>Bermain Game</p>
            <p>Traveling</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
