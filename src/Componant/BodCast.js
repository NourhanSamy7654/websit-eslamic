import "./bodStyle.css";

const podcastPlaylists = [
  {
    id: "stories",
    title: "القصص",
    src: "https://www.youtube.com/embed/videoseries?list=PLCpK4282MCT80bGKKd_Ia8-y9HzKQcyOP",
  },
  {
    id: "seerah",
    title: "السيرة النبوية",
    src: "https://www.youtube.com/embed/videoseries?list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee",
  },
  {
    id: "quran-stories",
    title: "قصص القرآن",
    src: "https://www.youtube.com/embed/videoseries?list=PLSSxr3Rf2_X09k084XozCL-GIIil-lC4V",
  },
  {
    id: "journey",
    title: "رحلة إلى الدار الآخرة",
    src: "https://www.youtube.com/embed/videoseries?list=PLSSxr3Rf2_X1QNGSYhHRVM4xW9_CWQe4B",
  },
  {
    id: "muslim-home",
    title: "البيت المسلم",
    src: "https://www.youtube.com/embed/videoseries?list=PLnFJTGgdQYTOWcUXdFLzpsgy6_rlXkwrh",
  },
];

function BodCast() {
  return (
    <section className="container mt-5 podcast-section" dir="rtl">
      <h2 className="section-title podcast-title text-center">بودكاست</h2>
      <p className="section-subtitle text-center">
        حلقات مختارة في السيرة والتزكية والقصص الإسلامية
      </p>

      <div className="row g-4">
        {podcastPlaylists.map((playlist) => (
          <div key={playlist.id} className="col-12 col-md-6">
            <article className="podcast-card">
              <div className="iframe-container">
                <iframe
                  src={playlist.src}
                  title={playlist.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="podcast-card-title">{playlist.title}</h3>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BodCast;
