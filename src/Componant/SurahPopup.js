import React from "react";
import "./Com.css";

const TEXT = {
  bismillah: "\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650",
  surahNumberPrefix: "\u0633\u0648\u0631\u0629 \u0631\u0642\u0645",
  close: "\u0625\u063a\u0644\u0627\u0642",
};

const SurahPopup = ({ surah, closePopup }) => {
  const surahNumber = surah.number_of_surah ?? surah.number;
  const firstVerseText = surah.verses?.[0]?.text ?? "";
  const hasBismillahInVerses =
    firstVerseText.includes("\u0628\u0650\u0633\u0652\u0645\u0650") || firstVerseText.includes("\u0628\u0633\u0645");
  const shouldShowBismillah = surahNumber !== 9 && !hasBismillahInVerses;

  return (
    <div
      className="quran-modal modal show d-block"
      tabIndex="-1"
      role="dialog"
      onClick={closePopup}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
        role="document"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header quran-modal-header">
            <div>
              <h5 className="modal-title quran-modal-title">
                {surah.name_translations?.ar} - {surah.name}
              </h5>
              <p className="quran-modal-meta mb-0">
                {TEXT.surahNumberPrefix} {surahNumber}
                {surah.place ? ` - ${surah.place}` : ""}
              </p>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={closePopup}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body quran-modal-body">
            <div className="quran-ayat-container">
              {shouldShowBismillah && <p className="bismillah">{TEXT.bismillah}</p>}

              {surah.verses?.map((verse) => (
                <div key={verse.number} className="quran-verse">
                  <span className="quran-verse-text">{verse.text}</span>
                  <span className="quran-verse-number">{verse.number}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-footer quran-modal-footer">
            <button type="button" className="btn quran-close-btn" onClick={closePopup}>
              {TEXT.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurahPopup;
