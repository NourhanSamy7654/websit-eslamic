import React, { useEffect, useMemo, useState } from "react";
import "./PrayTimeS.css";

const prayerNames = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

const prayerLabels = {
  Fajr: "الفجر",
  Sunrise: "الشروق",
  Dhuhr: "الظهر",
  Asr: "العصر",
  Maghrib: "المغرب",
  Isha: "العشاء",
};

const extractTime = (timeValue = "") => {
  const matched = timeValue.match(/\d{1,2}:\d{2}/);
  return matched ? matched[0] : "00:00";
};

const buildPrayerDate = (baseDate, timeValue, dayOffset = 0) => {
  const [hours, minutes] = extractTime(timeValue)
    .split(":")
    .map((value) => Number(value));

  const prayerDate = new Date(baseDate);
  prayerDate.setDate(baseDate.getDate() + dayOffset);
  prayerDate.setHours(hours, minutes, 0, 0);
  return prayerDate;
};

const toArabicPeriod = (timeValue) => {
  const [hours] = extractTime(timeValue)
    .split(":")
    .map((value) => Number(value));
  return hours < 12 ? "صباحًا" : "مساءً";
};

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPrayer, setNextPrayer] = useState("");
  const [countdown, setCountdown] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          "https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt"
        );

        if (!response.ok) {
          throw new Error("تعذر تحميل مواقيت الصلاة الآن");
        }

        const data = await response.json();
        setPrayerTimes(data.data.timings);
      } catch (fetchError) {
        setError(fetchError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  useEffect(() => {
    if (!Object.keys(prayerTimes).length) {
      return;
    }

    const updateCountdown = () => {
      const now = new Date();
      let nextPrayerTime = null;
      let nextPrayerName = "";

      for (const prayer of prayerNames) {
        const prayerDate = buildPrayerDate(now, prayerTimes[prayer]);
        if (prayerDate > now) {
          nextPrayerTime = prayerDate;
          nextPrayerName = prayer;
          break;
        }
      }

      if (!nextPrayerTime) {
        nextPrayerTime = buildPrayerDate(now, prayerTimes.Fajr, 1);
        nextPrayerName = "Fajr";
      }

      const timeDiff = Math.max(0, nextPrayerTime - now);
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      setCountdown(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
          2,
          "0"
        )}:${String(seconds).padStart(2, "0")}`
      );
      setNextPrayer(nextPrayerName);
      setCurrentTime(now);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [prayerTimes]);

  const todayDate = useMemo(
    () =>
      new Intl.DateTimeFormat("ar-EG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(currentTime),
    [currentTime]
  );

  return (
    <section className="container mt-5 prayer-section" dir="rtl">
      <h2 className="section-title prayer-title text-center">مواقيت الصلاة</h2>
      <p className="section-subtitle text-center">القاهرة، مصر - {todayDate}</p>

      {loading && <p className="prayer-status text-center">جارٍ تحميل المواقيت...</p>}
      {error && <p className="prayer-status prayer-status-error text-center">{error}</p>}

      {!loading && !error && (
        <div className="prayer-card">
          <div className="prayer-live-row">
            <div className="prayer-pill">
              <span>الوقت الآن</span>
              <strong>
                {currentTime.toLocaleTimeString("ar-EG", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </strong>
            </div>
            <div className="prayer-pill prayer-pill-highlight">
              <span>باقي على {prayerLabels[nextPrayer] || "الصلاة القادمة"}</span>
              <strong>{countdown}</strong>
            </div>
          </div>

          <div className="table-responsive mt-4">
            <table className="table prayer-table align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">الصلاة</th>
                  <th scope="col">الوقت</th>
                  <th scope="col">الفترة</th>
                </tr>
              </thead>
              <tbody>
                {prayerNames.map((prayer) => (
                  <tr key={prayer} className={nextPrayer === prayer ? "is-next" : ""}>
                    <td>{prayerLabels[prayer]}</td>
                    <td>{extractTime(prayerTimes[prayer])}</td>
                    <td>{toArabicPeriod(prayerTimes[prayer])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default PrayerTimes;
