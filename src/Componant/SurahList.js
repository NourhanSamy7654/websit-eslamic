import React, { useState, useEffect } from "react";
import SurahPopup from "./SurahPopup";
import "./Com.css";

const SurahList = () => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Fetch surahs data
    fetch(
      "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setSurahs(data);
      });
  }, []);

  const openPopup = (index) => {
    // Fetch surah details (verses)
    fetch(
      `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${
        index + 1
      }.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedSurah(data);
        setShowPopup(true);
      });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container mt-5">
      <h1
        className="text-center"
        style={{ padding: "20px", fontSize: "60px", color: "white" }}
      >
        القراءن الكريم
      </h1>
      <div className="row">
        {surahs.map((surah, index) => (
          <div key={index} className="col-md-3 mb-4">
            <button
              className="btn btn-primary w-100"
              onClick={() => openPopup(index)}
            >
              {surah.name_translations.ar} - {surah.name}
            </button>
          </div>
        ))}
      </div>

      {showPopup && selectedSurah && (
        <SurahPopup surah={selectedSurah} closePopup={closePopup} />
      )}
    </div>
  );
};

export default SurahList;
