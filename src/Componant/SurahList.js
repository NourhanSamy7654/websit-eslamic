import React, { useState, useEffect } from "react";
import SurahPopup from "./SurahPopup";
import "./Com.css";

const TEXT = {
  title: "\u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064a\u0645",
  subtitle: "\u0627\u062e\u062a\u0631 \u0627\u0644\u0633\u0648\u0631\u0629 \u0644\u062a\u0642\u0631\u0623 \u0627\u0644\u0622\u064a\u0627\u062a \u0628\u062e\u0637 \u0648\u0627\u0636\u062d \u0648\u0645\u0631\u064a\u062d",
  loading: "\u062c\u0627\u0631\u064d \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0633\u0648\u0631...",
  loadError: "\u062a\u0639\u0630\u0631 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0633\u0648\u0631 \u0627\u0644\u0622\u0646. \u062d\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.",
  surahError: "\u062a\u0639\u0630\u0631 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0633\u0648\u0631\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629.",
};

const SurahList = () => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch surahs");
        }

        const data = await response.json();
        setSurahs(data);
      } catch (err) {
        setError(TEXT.loadError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  const openPopup = async (index) => {
    try {
      setError("");
      const response = await fetch(
        `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${
          index + 1
        }.json`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch surah details");
      }

      const data = await response.json();
      setSelectedSurah(data);
      setShowPopup(true);
    } catch (err) {
      setError(TEXT.surahError);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="container mt-5 quran-section" dir="rtl">
      <h1 className="section-title quran-title text-center">{TEXT.title}</h1>
      <p className="section-subtitle quran-subtitle text-center">{TEXT.subtitle}</p>

      {isLoading && <p className="quran-status text-center">{TEXT.loading}</p>}
      {error && <p className="quran-status quran-status-error text-center">{error}</p>}

      <div className="row g-3 quran-grid">
        {surahs.map((surah, index) => (
          <div key={`${surah.name}-${index}`} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <button className="surah-btn" onClick={() => openPopup(index)}>
              <span className="surah-index">{surah.number_of_surah ?? index + 1}</span>
              <span className="surah-ar">{surah.name_translations?.ar ?? surah.name}</span>
              <span className="surah-en">{surah.name}</span>
            </button>
          </div>
        ))}
      </div>

      {showPopup && selectedSurah && (
        <SurahPopup surah={selectedSurah} closePopup={closePopup} />
      )}
    </section>
  );
};

export default SurahList;
