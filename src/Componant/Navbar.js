import React from "react";
import "./Com.css"; // Your custom styles here
import img1 from "./img1.png";
function Navbar({
  scrollToSection,
  azkarRef,
  surahRef,
  prayRef,
  homeRef,
  bocastRef,
}) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/home"
          onClick={() => scrollToSection(homeRef)}
          style={{ paddingLeft: "50%" }}
        >
          <img
            src={img1}
            alt=""
            style={{
              height: "50px",
              backgroundColor: "blue",
            }}
          />{" "}
          حِصْنُ المُسْلِمِ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#azkar"
                onClick={() => scrollToSection(azkarRef)}
              >
                أذكار
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#surah"
                onClick={() => scrollToSection(surahRef)}
              >
                القرآن الكريم
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#pray"
                onClick={() => scrollToSection(prayRef)}
              >
                موقيت الصلاه
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#pray"
                onClick={() => scrollToSection(bocastRef)}
              >
                بودكاست
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
