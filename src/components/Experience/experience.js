import React from "react";

const Experience = () => {
  return (
    <div>
      <hr className="m-0" />
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>

          {/* Final Year Project */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Final Year Project</h3>
              <div className="subheading mb-3">Developed a web application</div>
              <p>
                Ketika menjadi mahasiswa, saya telah memperoleh keterampilan dan
                pengetahuan di berbagai bidang yang mendukung kemampuan saya
                dalam bekerja di dunia profesional. Saya terlibat dalam berbagai
                kegiatan yang mengembangkan kemampuan pemecahan masalah dan
                pemikiran kritis. Selain itu, saya berpartisipasi dalam
                proyek-proyek yang mendorong penerapan teknologi dan inovasi
                untuk menciptakan solusi yang efektif dan efisien.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Juli 2023 - Desember 2024</span>
            </div>
          </div>

          {/* Freelance Web Developer */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Freelance Web Developer</h3>
              <div className="subheading mb-3">Universitas Klabat</div>
              <p>
                Sebagai seorang Freelance Web Developer, saya menangani berbagai
                proyek pengembangan website dan aplikasi web. Fokus utama saya
                adalah meningkatkan fungsionalitas dan kinerja aplikasi dengan
                teknologi terbaru. Saya juga bekerja untuk mengoptimalkan alur
                kerja, menyempurnakan pengalaman pengguna, serta melakukan
                pengujian beta untuk memaksimalkan hasil proyek.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Desember 2022 - Maret 2023</span>
            </div>
          </div>

          {/* Teknisi Smartphone */}
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Teknisi Smartphone</h3>
              <div className="subheading mb-3">Kai Cell</div>
              <p>
                Saya bertanggung jawab untuk memperbaiki dan memelihara
                perangkat smartphone. Dalam peran ini, saya fokus pada pemecahan
                masalah teknis, memberikan solusi yang cepat dan akurat, serta
                meningkatkan layanan pelanggan. Saya juga terlibat dalam
                penerapan teknologi baru untuk meningkatkan efisiensi proses
                kerja.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Juli 2021 - Desember 2023</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
