// import "./App.css";
import AzkarList from "./Componant/AzkarList.js";
import Navbar from "./Componant/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";

import AzkarHome from "./Componant/AzkarHome.js";
import SurahList from "./Componant/SurahList.js";
import React, { useRef } from "react";
import "./Componant/Com.css";
import PrayerTimes from "./Componant/PrayTime.js";
import BodCast from "./Componant/BodCast.js";
import Footer from "./Componant/Footer.js";
import { BrowserRouter } from "react-router-dom";
function App() {
  const azkarRef = useRef(null); // Reference to Azkar section
  const surahRef = useRef(null); // Reference to Surah section
  const homeRef = useRef(null);
  const prayRef = useRef(null);
  const bocastRef = useRef(null);

  // Scroll to a particular section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar
          scrollToSection={scrollToSection}
          azkarRef={azkarRef}
          surahRef={surahRef}
          homeRef={homeRef}
          prayRef={prayRef}
          bocastRef={bocastRef}
        />
        <section ref={homeRef} style={{ width: "100%" }}>
          <AzkarHome />

          <hr />
        </section>
        <div className="container mt-5">
          {/* Azkar Section */}

          <section ref={azkarRef}>
            <AzkarList />
          </section>

          {/* Surah Section */}
          <section ref={surahRef}>
            <SurahList />
          </section>
          <section ref={prayRef}>
            <PrayerTimes />
          </section>
          <section ref={bocastRef}>
            <BodCast />
          </section>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
