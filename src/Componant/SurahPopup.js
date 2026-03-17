import React from "react";
import "./Com.css";

const TEXT = {
  bismillah: "\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650",
  surahNumberPrefix: "\u0633\u0648\u0631\u0629 \u0631\u0642\u0645",
  close: "\u0625\u063a\u0644\u0627\u0642",
};

const BISMILLAH_VARIANTS = [
  "\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064e\u0647\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650",
  "\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650",
  "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0631\u062d\u064a\u0645",
];

const stripBismillahPrefix = (text = "") => {
  let cleaned = text.trim();

  for (const variant of BISMILLAH_VARIANTS) {
    if (cleaned.startsWith(variant)) {
      cleaned = cleaned.slice(variant.length).trim();
      cleaned = cleaned.replace(/^[\u060C\u06D4\.\-\s]+/, "").trim();
      break;
    }
  }

  return cleaned;
};

const SurahPopup = ({ surah, closePopup }) => {
  const surahNumber = surah.number_of_surah ?? surah.number;
  const shouldShowBismillah = surahNumber !== 9 && surahNumber !== 1;

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

              {surah.verses?.map((verse) => {
                const isFirstVerse = Number(verse.number) === 1;
                const strippedText =
                  isFirstVerse && shouldShowBismillah
                    ? stripBismillahPrefix(verse.text)
                    : verse.text;
                const verseText = strippedText || verse.text;

                return (
                  <div key={verse.number} className="quran-verse">
                    <span className="quran-verse-text">{verseText}</span>
                    <span className="quran-verse-number">{verse.number}</span>
                  </div>
                );
              })}
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
