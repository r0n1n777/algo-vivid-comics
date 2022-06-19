import Menu from "./menu";

const LandingPage2 = ({ pageToShow, handleStartCue }) => {
  switch (pageToShow) {
    case 0:
      return (
        <div>
          <div className="container-fluid landing p-0">
            <div className="view-now-2-wrapper">
              <div className="view-now-2 mx-4 d-flex justify-content-center align-items-center">
                <p className="mb-0 text-white">View Now.</p>
                <img
                  className="view-now-2-tail"
                  src={"./Assets/view-now-tail.png"}
                  alt=""
                />
              </div>
            </div>

            <div className="landing-cover w-100 h-100 d-flex align-items-start flex-column justify-content-center">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="circle d-flex justify-content-center align-items-center">
                  <p className="mb-0 mt-5 text-white">Expanded Comics</p>
                </div>
              </div>
              <div className="title text-white m-3 m-md-5 mt-5">
                <h1>
                  <strong>VIVID</strong>
                </h1>
                <p>A hybrid form of animation and comics</p>
              </div>
            </div>
          </div>

          <div className="container-fluid content-2 py-5">
            <div className="watch">
              <img className="img-fluid" src={"./Assets/01-Watch.png"} alt="" />
              <img
                src={"./Assets/Play.png"}
                width="100px"
                alt="Play button"
                className="img-fluid play"
              />
              <div className="title">
                <h1 className="text-white">
                  <strong>01</strong>
                </h1>
                <h1 style={{ color: "#0C85E2" }}>
                  <strong>Watch</strong>
                </h1>
                <p className="text-secondary watch-p">
                  <strong>How to navigate through vivid</strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="start-cue">
          <video id="startCue" className="img-fluid" onClick={handleStartCue}>
            <source src={"./Assets/1 Start_Visual Cues.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p id="start-cue-center">.</p>
        </div>
      );
    case 2:
      return <Menu />;
  }
};

export default LandingPage2;
