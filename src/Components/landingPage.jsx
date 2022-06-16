import { useNavigate } from "react-router-dom";

const LandingPage = ({ handleStartCue }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container-fluid landing p-0">
        <div className="landing-cover w-100 h-100">
          <div className="title text-white m-3 m-md-5 mt-5">
            <h1 className="fw-bold">VIVID</h1>
            <p className="opacity-75">A hybrid form of animation and comics</p>
          </div>
          <div className="view-now mx-4 d-flex justify-content-center align-items-center">
            <p className="mb-0 text-white">View Now.</p>
            <img
              className="view-now-tail"
              src={"./Assets/view-now-tail.png"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-fluid content pt-5">
        <div className="watch">
          <img className="img-fluid" src={"./Assets/01-Watch.png"} alt="" />
          <img
            onClick={() =>
              document.getElementById("start-cue-center").scrollIntoView(true)
            }
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
            <p className="text-light watch-p">
              <strong>How to navigate through vivid</strong>{" "}
            </p>
          </div>
        </div>
        <div className="how-to mt-5 d-flex justify-content-start align-items-center">
          <div className="title mx-3 mt-5 pt-5">
            <h1 className="text-white">
              <strong>HOW TO</strong>
            </h1>
            <p className="text-light">NAVIGATE THROUGH VIVID EXPANDED COMICS</p>
          </div>
        </div>
        <div className="start-cue">
          <video id="startCue" className="img-fluid" onClick={handleStartCue}>
            <source src={"./Assets/1 Start_Visual Cues.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p id="start-cue-center">.</p>
        </div>
        <div className="home-wrapper w-100 d-flex justify-content-center align-items-center py-5">
          <a href="#root">
            <img
              width="60px"
              src={"./Assets/Home Button.png"}
              alt="home button"
              onClick={() => navigate("/")}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
