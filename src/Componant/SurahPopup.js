import React from "react";

const SurahPopup = ({ surah, closePopup }) => {
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Surah {surah.name} - {surah.name_translations.ar}
            </h5>
            <button
              type="button"
              className="close"
              onClick={closePopup}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="ayat-container">
              {surah.verses.map((verse) => (
                <p key={verse.number}>
                  <strong>({verse.number})</strong> - {verse.text}
                </p>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurahPopup;
