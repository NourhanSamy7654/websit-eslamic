import { useState } from "react";
import azkarData from "./AzkarData.js";
import "./Com.css";

function AzkarList() {
  const [selectedAzkar, setSelectedAzkar] = useState(null);
  const [counts, setCounts] = useState({});

  const handleAzkarClick = (azkarCategory) => {
    setSelectedAzkar(azkarCategory);
  };

  const handleCountUp = (index) => {
    if (!selectedAzkar) {
      return;
    }

    const countKey = `${selectedAzkar}-${index}`;
    const targetCount = Number(azkarData[selectedAzkar][index].count) || 0;

    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      const currentCount = newCounts[countKey] || 0;

      if (currentCount < targetCount) {
        newCounts[countKey] = currentCount + 1;
      }

      return newCounts;
    });
  };

  return (
    <section className="container mt-5 azkar-section" dir="rtl">
      <h1 className="section-title azkar-title text-center">الأذكار</h1>
      <p className="section-subtitle text-center">
        اختر التصنيف الذي تريد قراءته ثم تابع العدّاد بسهولة
      </p>

      <div className="azkar-categories">
        {Object.keys(azkarData).map((azkarCategory) => (
          <button
            key={azkarCategory}
            className={`btn azkar-category-btn ${
              selectedAzkar === azkarCategory ? "active" : ""
            }`}
            onClick={() => handleAzkarClick(azkarCategory)}
          >
            {azkarCategory}
          </button>
        ))}
      </div>

      {selectedAzkar && (
        <div className="azkar-content-wrap">
          <h2 className="azkar-selected-title">{selectedAzkar}</h2>
          {azkarData[selectedAzkar].map((azkar, index) => (
            <div key={`${selectedAzkar}-${index}`} className="azkar-card">
              <div className="card-body">
                <p className="card-text azkar-content">{azkar.content}</p>
                {azkar.description && (
                  <p className="card-text text-muted azkar-description">
                    {azkar.description}
                  </p>
                )}
                {azkar.reference && (
                  <p className="azkar-reference">المصدر: {azkar.reference}</p>
                )}

                <p className="azkar-recitation">
                  التكرار: <strong>{counts[`${selectedAzkar}-${index}`] || 0}</strong> /{" "}
                  {Number(azkar.count) || 0}
                </p>

                <button
                  className="btn azkar-count-btn"
                  onClick={() => handleCountUp(index)}
                  disabled={
                    (counts[`${selectedAzkar}-${index}`] || 0) >=
                    (Number(azkar.count) || 0)
                  }
                >
                  تم الذكر
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!selectedAzkar && (
        <p className="azkar-status text-center">ابدأ باختيار نوع الأذكار من الأعلى</p>
      )}
    </section>
  );
}

export default AzkarList;
