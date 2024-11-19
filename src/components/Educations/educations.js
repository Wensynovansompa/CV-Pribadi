import React from "react";

const Educations = () => {
  return (
    <div>
      <hr className="m-0" />
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
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
    </div>
  );
};
export default Educations;
