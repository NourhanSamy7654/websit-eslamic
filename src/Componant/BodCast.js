import "./bodStyle.css";

function BodCast() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">بودكاست</h1>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="iframe-container">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLCpK4282MCT80bGKKd_Ia8-y9HzKQcyOP"
                title="قصص"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button className="btn btn-primary w-100 mt-2">القصص</button>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="iframe-container">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee"
                title="السيره النبويه"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button className="btn btn-primary w-100 mt-2">
                السيره النبويه
              </button>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="iframe-container">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLSSxr3Rf2_X09k084XozCL-GIIil-lC4V"
                title="قصص القراّن"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button className="btn btn-primary w-100 mt-2">
                قصص القراّن
              </button>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="iframe-container">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLSSxr3Rf2_X1QNGSYhHRVM4xW9_CWQe4B"
                title="رحله الي الداره الاخره"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button className="btn btn-primary w-100 mt-2">
                رحله الي الداره الاخره
              </button>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="iframe-container">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLnFJTGgdQYTOWcUXdFLzpsgy6_rlXkwrh"
                title="البيت المسلم"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button className="btn btn-primary w-100 mt-2">
                البيت المسلم
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodCast;
