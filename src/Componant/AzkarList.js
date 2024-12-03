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
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      const currentCount = newCounts[index] || 0;

      if (currentCount < azkarData[selectedAzkar][index].count) {
        newCounts[index] = currentCount + 1;
      }

      return newCounts;
    });
  };

  return (
    <div className="container mt-4 text-center">
      <h1
        className="display-4 text-center fw-bold mb-4 heading-azkar"
        style={{
          paddingBottom: "50px",

          marginTop: "0px",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
        }}
      >
        أذكار
      </h1>

      <div className="mb-3">
        {Object.keys(azkarData).map((azkarCategory) => (
          <button
            key={azkarCategory}
            className="btn btn-outline-primary mx-2 mb-2 animate-btn"
            onClick={() => handleAzkarClick(azkarCategory)}
          >
            {azkarCategory}
          </button>
        ))}
      </div>

      {selectedAzkar && (
        <div>
          <h2 className="mb-4">{selectedAzkar}</h2>
          {azkarData[selectedAzkar].map((azkar, index) => (
            <div
              key={index}
              className="card mb-3 shadow-lg p-3 bg-white rounded"
            >
              <div className="card-body">
                <p className="card-text">{azkar.content}</p>
                <p className="card-text text-muted">{azkar.description}</p>

                <p>
                  Recitations: <strong>{counts[index] || 0}</strong> /{" "}
                  {azkar.count}
                </p>

                <button
                  className="btn btn-success animate-recite-btn"
                  onClick={() => handleCountUp(index)}
                  disabled={(counts[index] || 0) >= azkar.count}
                >
                  Count
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AzkarList;
