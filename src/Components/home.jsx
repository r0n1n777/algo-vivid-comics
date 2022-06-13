import LandingPage from "./landingPage";
import LandingPage2 from "./landingPage2";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";

const Home = ({
  handleStartCue,
  setPageToShow,
  isLandingPage2,
  pageToShow,
  disabledVivid,
  isNavbar2,
}) => {
  return (
    <div>
      {isNavbar2 ? (
        <Navbar2
          disabledVivid={disabledVivid}
          setPageToShow={setPageToShow}
          pageToShow={pageToShow}
        />
      ) : (
        <Navbar disabledVivid={disabledVivid} />
      )}

      {isLandingPage2 ? (
        <LandingPage2 pageToShow={pageToShow} handleStartCue={handleStartCue} />
      ) : (
        <LandingPage handleStartCue={handleStartCue} />
      )}
    </div>
  );
};

export default Home;
