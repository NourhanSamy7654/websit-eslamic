// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import './Com.css'

// const SurahDetail = () => {
//   const { id } = useParams();
//   const [surah, setSurah] = useState(null);

//   useEffect(() => {
//     fetch(`http://api.alquran.cloud/v1/surah/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setSurah(data.data);
//       });
//   }, [id]);

//   if (!surah) return <div>Loading...</div>;

//   return (
//     <div className="container">
//       <h1>{surah.englishName}</h1>
//       <p>{surah.englishNameTranslation}</p>
//       <ul>
//         {surah.ayahs.map((ayah) => (
//           <li key={ayah.number}>
//             <strong>{ayah.number}:</strong> {ayah.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SurahDetail;
