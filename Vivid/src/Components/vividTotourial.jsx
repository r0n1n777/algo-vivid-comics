import { useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";

const VividTotourial = ({
  setLandingPage2,
  setNavbar2,
  setDisabledVivid,
  setClick,
}) => {
  const navigate = useNavigate();

  const handleNext = () => {
    const { current: carousel } = caro;
    carousel.slideNext();
  };

  const toHome = () => {
    navigate("/");
  };

  const videoStyle = {
    height: "100vh",
    width: "100%",
  };

  const caro = useRef(null);
  const [vids] = useState([
    {
      id: 1,
      video: (
        <video
          style={videoStyle}
          className="img-fluid"
          autoPlay
          muted
          onClick={handleNext}
        >
          <source src={"./Assets/Panel 1.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
    },
    {
      id: 2,
      video: (
        <video
          style={videoStyle}
          className="img-fluid"
          autoPlay
          muted
          onClick={handleNext}
        >
          <source src={"./Assets/2.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
    },
    {
      id: 3,
      video: (
        <video
          style={videoStyle}
          className="img-fluid"
          autoPlay
          muted
          onClick={handleNext}
        >
          <source src={"./Assets/Page Cues 3b.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
    },
    {
      id: 4,
      video: (
        <video
          style={videoStyle}
          className="img-fluid"
          autoPlay
          muted
          onClick={() => {
            toHome();
            setLandingPage2(true);
            setNavbar2(true);
            setDisabledVivid(false);
            setClick(false);
          }}
        >
          <source src={"./Assets/Home - Scroll.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
    },
  ]);

  return (
    <div>
      <Carousel
        ref={caro}
        easing={"fade"}
        transitionMs={2000}
        pagination={false}
        showArrows={false}
      >
        {vids.map((vid) => (
          <div key={vid.id}>{vid.video}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default VividTotourial;
