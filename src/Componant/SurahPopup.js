import React from "react";
import "./Com.css"; // تأكد من إضافة التعديلات في ملف CSS

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
              {/* هنا نعرض "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ" في سطر منفصل */}
              <p className="bismillah">
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>

              {/* عرض الآيات مع رقم الآية بعد النص */}
              {surah.verses.map((verse, index) => (
                <div key={verse.number} className="verse-item">
                  <span className="ayat">{verse.text}</span>
                  <span className="verse-number"> ({verse.number})</span>
                </div>
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
