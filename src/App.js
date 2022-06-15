import "./App.css";
import Home from "./Components/home";
import VividTotourial from "./Components/vividTotourial";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Vivid from "./Components/vivid";

function App() {
  const [click, setClick] = useState(false);
  const [isLandingPage2, setLandingPage2] = useState(false);
  const [isNavbar2, setNavbar2] = useState(false);
  const [disabledVivid, setDisabledVivid] = useState(true);
  const [pageToShow, setPageToShow] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [encircled, setEncircled] = useState(0);
  const [isLoading, setLoading] = useState(true);
 
  const navigate = useNavigate();

  useEffect(() => {
    
  setTimeout(() => {
    setLoading(false);
  }, 1000)

  }, [])

  const handleStartCue = () => {
    const startCue = document.getElementById("startCue");
    if (!click) {
      startCue.play();
      setClick(true);
    } else {
      navigate("/vivid-tutorial");
    }
  };

  if(isLoading){
    return <div className="container-fluid loading-screen bg-black d-flex justify-content-center align-items-center"><img src="./Assets/loading.gif"></img></div>
  }

  return (
    <div className="container d-flex justify-content-center align-items-center p-0">
      <div className="container-root p-0">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleStartCue={handleStartCue}
                setPageToShow={setPageToShow}
                isLandingPage2={isLandingPage2}
                isNavbar2={isNavbar2}
                pageToShow={pageToShow}
                disabledVivid={disabledVivid}
               
              />
            }
          />
          <Route
            path="vivid-tutorial"
            element={
              <VividTotourial
                setClick={setClick}
                setLandingPage2={setLandingPage2}
                setDisabledVivid={setDisabledVivid}
                setNavbar2={setNavbar2}
              />
            }
          />
          <Route path="vivid" element={<Vivid  currentPage={currentPage}
                setCurrentPage={setCurrentPage} encircled={encircled} setEncircled={setEncircled} setPageToShow={setPageToShow}  />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
