import React, { useEffect, useState } from "react";
import "./PrayTimeS.css";

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPrayer, setNextPrayer] = useState("");
  const [countdown, setCountdown] = useState("");

  const prayerNames = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          "https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPrayerTimes(data.data.timings);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Object.keys(prayerTimes).length > 0) {
        const now = new Date();
        let nextPrayerTime = null;
        let nextPrayerName = "";

        for (const prayer of prayerNames) {
          const prayerDate = new Date(
            `${now.toISOString().split("T")[0]}T${prayerTimes[prayer]}:00`
          );
          if (prayerDate > now) {
            nextPrayerTime = prayerDate;
            nextPrayerName = prayer;
            break;
          }
        }

        // إذا لم يكن هناك وقت للصلاة، استخدم وقت صلاة الفجر في اليوم التالي
        if (!nextPrayerTime) {
          const tomorrow = new Date();
          tomorrow.setDate(now.getDate() + 1);
          nextPrayerTime = new Date(
            `${tomorrow.toISOString().split("T")[0]}T${prayerTimes.Fajr}:00`
          );
          nextPrayerName = "Fajr";
        }

        // حساب الفرق في الوقت
        const timeDiff = nextPrayerTime - now;

        // تأكد من أن الوقت المتبقي ليس سالبًا
        if (timeDiff > 0) {
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
        } else {
          setCountdown("00:00:00");
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [prayerTimes]);

  return (
    <div className="container mt-5">
      <h3 className="text-center">مواقيت الصلاة - القاهرة، مصر</h3>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      {!loading && !error && (
        <div className="text-center">
          <h4 className="current-time">
            الساعة الان: {new Date().toLocaleTimeString("ar-EG")}
          </h4>
          <h5 className="next-prayer">
            باقي على {nextPrayer}: {countdown}
          </h5>
          <table className="table table-striped table-hover mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">الصلاة</th>
                <th scope="col">الوقت</th>
                <th scope="col">صباحًا/مساءً</th>
              </tr>
            </thead>
            <tbody>
              {prayerNames.map((prayer) => (
                <tr key={prayer}>
                  <td>
                    {prayer === "Fajr"
                      ? "الفجر"
                      : prayer === "Sunrise"
                      ? "الشروق"
                      : prayer === "Dhuhr"
                      ? "الظهر"
                      : prayer === "Asr"
                      ? "العصر"
                      : prayer === "Maghrib"
                      ? "المغرب"
                      : "العشاء"}
                  </td>
                  <td>{prayerTimes[prayer]}</td>
                  <td>
                    {prayer === "Fajr" || prayer === "Sunrise"
                      ? "صباحًا"
                      : "مساءً"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PrayerTimes;
