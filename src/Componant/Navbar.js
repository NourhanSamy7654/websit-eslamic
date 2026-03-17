import React from "react";
import "./Com.css";
import img1 from "./img1.png";

const TEXT = {
  brandAlt: "\u0634\u0639\u0627\u0631 \u062d\u0635\u0646 \u0627\u0644\u0645\u0633\u0644\u0645",
  brand: "\u062d\u0650\u0635\u0652\u0646\u064f \u0627\u0644\u0645\u064f\u0633\u0652\u0644\u0650\u0645\u0650",
  azkar: "\u0623\u0630\u0643\u0627\u0631",
  quran: "\u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064a\u0645",
  prayers: "\u0645\u0648\u0627\u0642\u064a\u062a \u0627\u0644\u0635\u0644\u0627\u0629",
  podcast: "\u0628\u0648\u062f\u0643\u0627\u0633\u062a",
  darkMode: "\u0648\u0636\u0639 \u0644\u064a\u0644\u064a",
  lightMode: "\u0648\u0636\u0639 \u0646\u0647\u0627\u0631\u064a",
};

function Navbar({
  scrollToSection,
  azkarRef,
  surahRef,
  prayRef,
  homeRef,
  bocastRef,
  isDarkMode,
  toggleTheme,
}) {
  const handleNavClick = (event, ref) => {
    event.preventDefault();
    scrollToSection(ref);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-transparent" dir="rtl">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#home"
          onClick={(event) => handleNavClick(event, homeRef)}
        >
          <img src={img1} alt={TEXT.brandAlt} />
          <span className="brand-title">{TEXT.brand}</span>
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

        <div className="collapse navbar-collapse nav-links-wrap" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-links-list">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#azkar"
                onClick={(event) => handleNavClick(event, azkarRef)}
              >
                {TEXT.azkar}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#surah"
                onClick={(event) => handleNavClick(event, surahRef)}
              >
                {TEXT.quran}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#pray"
                onClick={(event) => handleNavClick(event, prayRef)}
              >
                {TEXT.prayers}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#podcast"
                onClick={(event) => handleNavClick(event, bocastRef)}
              >
                {TEXT.podcast}
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={isDarkMode ? TEXT.lightMode : TEXT.darkMode}
            title={isDarkMode ? TEXT.lightMode : TEXT.darkMode}
          >
            <i
              className={`fa ${isDarkMode ? "fa-sun-o" : "fa-moon-o"}`}
              aria-hidden="true"
            ></i>
            <span>{isDarkMode ? TEXT.lightMode : TEXT.darkMode}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
