import Menu2 from "./menu2";
import Pagination from "./pagination";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar2 from "./navbar2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Modal from "./modal";

const Vivid = ({
  currentPage,
  setCurrentPage,
  encircled,
  setEncircled,
  setPageToShow,
  showPagination,
  setShowPagination,
  pageToShow,
  handleStartCue,
  showModal,
  setShowModal,
  vidInModal,
  setVidInModal,
}) => {
  const [currentVid, setCurrentVid] = useState(null);

  const handlePause = (vid) => {
    vid.pause();
    setCurrentVid(vid);
  };

  const handlePlay = (vid) => {
    vid.play();
  };

  const navigate = useNavigate();

  const pagination = (
    <Pagination
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      encircled={encircled}
      setEncircled={setEncircled}
      setPageToShow={setPageToShow}
      setShowPagination={setShowPagination}
    />
  );

  const scroll = (
    <motion.div className="scroll-button d-flex justify-content-end align-items-center w-100">
      <motion.img
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        src={"./Assets/Scroll.png"}
        alt="scroll"
      />
    </motion.div>
  );

  const hamburger = (
    <div className="w-100 hamburger-wrapper" style={{ cursor: "pointer" }}>
      <img
        onClick={() => {
          setCurrentPage(0);
          setPageToShow(2);
        }}
        src="./Assets/hamburger.png"
        alt="hamburger"
        width="100px"
      />
    </div>
  );

  const modal = (
    <Modal
      handlePlay={handlePlay}
      currentVid={currentVid}
      setShowModal={setShowModal}
      vidInModal={vidInModal}
      showModal={showModal}
    />
  );

  const vid1 = useRef();
  const vid2 = useRef();
  const vid3 = useRef();
  const vid4 = useRef();
  const vid5 = useRef();
  const vid6 = useRef();
  const vid7 = useRef();

  const [elementRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setShowPagination(true);
    } else {
      setShowPagination(false);
    }
  });

  switch (currentPage) {
    case 0:
      let output;

      switch (pageToShow) {
        case 0:
          navigate("/");
          break;

        case 1:
          output = (
            <div className="start-cue">
              <video
                id="startCue"
                className="img-fluid"
                onClick={handleStartCue}
              >
                <source
                  src={"./Assets/1 Start_Visual Cues.mp4"}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p id="start-cue-center">.</p>
            </div>
          );
          break;

        case 2:
          output = (
            <Menu2
              setCurrentPage={setCurrentPage}
              setShowPagination={setShowPagination}
            />
          );
          break;
        default:
          console.log("Error, invalid page provided!");
      }
      return (
        <>
          <Navbar2
            disabledVivid={false}
            setPageToShow={setPageToShow}
            pageToShow={pageToShow}
          />
          {output}
        </>
      );

    case 1:
      return (
        <div className="page">
          {showPagination && scroll}
          {hamburger}
          {setEncircled(2)}

          <div className="video-wrapper py-5 d-flex justify-content-center align-items-center flex-column">
            <video
              poster={"./Assets/loading.gif"}
              width="200px"
              ref={vid1}
              className="img-fluid"
              autoPlay
              muted
              onEnded={() => {
                vid1.current.play();
              }}
            >
              <source src={"./Assets/Page1-Panel1_Trim.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mb-0 text-white text-nowrap">
              I'm not sure if I can still remember
            </p>
          </div>
          <div className="tangled3-wrapper py-5 d-flex justify-content-center align-items-center flex-column">
            <div className="door"></div>
            <video className="img-fluid page1-panel2" autoPlay muted loop>
              <source
                src={"./Assets/Page1-Panel2-compressed.mp4"}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="leafs-wrapper">
            <div className="leafs">
              <img src="./Assets/Leaf_em.png" alt="" width="150px" />
              <img src="./Assets/Leaf_en.png" alt="" width="150px" />
              <img src="./Assets/Leaf_eo.png" alt="" width="250px" />
              <img src="./Assets/Leaf_ep.png" alt="" width="150px" />
            </div>
            <p className="text-white text-center px-3">
              or when I last took a glance of my own reflection
            </p>
            <div className="cover-wrapper">
              <img
                src={"./Assets/Panel 3 Page 1.jpg"}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="A-panel-wrapper text-white">
            <img
              ref={elementRef}
              src="./Assets/Panel 4 Page 1.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          {pagination}
        </div>
      );

    case 2:
      return (
        <div className="page page-2">
          {modal}
          {showPagination && scroll}
          {hamburger}
          <div className="wrapper position-relative">
            <div
              className="box-1"
              onClick={() => {
                setVidInModal("./Assets/Page 2Panel2_1.mp4");
                setShowModal(true);
                handlePause(vid2.current);
              }}
            ></div>
            <div
              className="box-2"
              onClick={() => {
                setVidInModal("./Assets/Page 2Panel 1.mp4");
                setShowModal(true);
                handlePause(vid2.current);
              }}
            ></div>
            <div
              className="box-3"
              onClick={() => {
                setVidInModal("./Assets/Page 2Panel3_1.mp4");
                setShowModal(true);
                handlePause(vid2.current);
              }}
            ></div>
            <div
              className="box-4"
              onClick={() => {
                setVidInModal("./Assets/Page 2Panel2.mp4");
                setShowModal(true);
                handlePause(vid2.current);
              }}
            ></div>
            <div
              className="box-5"
              onClick={() => {
                setVidInModal("./Assets/Page 2Panel 5_1.mp4");
                setShowModal(true);
                handlePause(vid2.current);
              }}
            ></div>
            <video
              ref={vid2}
              poster={"./Assets/loading.gif"}
              src={"./Assets/Page-2.mp4"}
              className="img-fluid"
              autoPlay="1"
              muted
              onEnded={() => {
                setShowPagination(true);
                vid2.current.play();
                setEncircled(3);
              }}
            ></video>
            <div className="black-hider"></div>
          </div>
          {pagination}
        </div>
      );
    case 3:
      return (
        <div className="page">
          {showPagination && scroll}
          {hamburger}
          {modal}

          <div className="wrapper position-relative">
            <video
              ref={vid3}
              poster={"./Assets/loading.gif"}
              src={"./Assets/Page-3.mp4"}
              className="img-fluid"
              autoPlay
              muted
              style={{ cursor: "pointer" }}
              onClick={() => {
                setVidInModal("./Assets/Page 3 Panel 1.mp4");
                setShowModal(true);
                handlePause(vid3.current);
              }}
              onEnded={() => {
                setShowPagination(true);
                vid3.current.play();
                setEncircled(4);
              }}
            ></video>
            <div className="black-hider"></div>
          </div>
          {pagination}
        </div>
      );
    case 4:
      return (
        <div className="page page-4">
          {showPagination && scroll}
          {modal}
          <div className="wrapper position-relative">
            {hamburger}
            <div
              className="box-1"
              onClick={() => {
                setVidInModal("./Assets/Page 4 Panel 1 Compressed.mp4");
                setShowModal(true);
                handlePause(vid4.current);
              }}
            ></div>
            <video
              ref={vid4}
              poster={"./Assets/loading.gif"}
              src={"./Assets/Page-4.mp4"}
              className="img-fluid"
              autoPlay
              muted
              onEnded={() => {
                setShowPagination(true);
                vid4.current.play();
                setEncircled(5);
              }}
            ></video>
            <div className="black-hider"></div>
          </div>
          {pagination}
        </div>
      );
    case 5:
      return (
        <div className="page">
          {showPagination && scroll}

          <div className="wrapper position-relative">
            {hamburger}
            <video
              ref={vid5}
              poster={"./Assets/loading.gif"}
              src={"./Assets/Page-5.mp4"}
              className="img-fluid"
              autoPlay
              muted
              onEnded={() => {
                setShowPagination(true);
                vid5.current.play();
                setEncircled(6);
              }}
            ></video>
            <div className="black-hider"></div>
          </div>
          {pagination}
        </div>
      );
    case 6:
      return (
        <div className="page page-6">
          {modal}
          {showPagination && scroll}
          <div className="wrapper position-relative">
            {hamburger}
            <div
              className="box-1"
              onClick={() => {
                setVidInModal("./Assets/Page6 Panel 1_compressed.mp4");
                setShowModal(true);
                handlePause(vid6.current);
              }}
            ></div>
            <div
              className="box-2"
              onClick={() => {
                setVidInModal("./Assets/Page6 Panel 2_compressed.mp4");
                setShowModal(true);
                handlePause(vid6.current);
              }}
            ></div>
            <div
              className="box-3"
              onClick={() => {
                setVidInModal("./Assets/Page6 Panel 3_compressed.mp4");
                setShowModal(true);
                handlePause(vid6.current);
              }}
            ></div>
            <div
              className="box-4"
              onClick={() => {
                setVidInModal("./Assets/Page6 Panel 4_compressed.mp4");
                setShowModal(true);
                handlePause(vid6.current);
              }}
            ></div>
            <div
              className="box-5"
              onClick={() => {
                setVidInModal("./Assets/Page6 Panel 5_compressed.mp4");
                setShowModal(true);
                handlePause(vid6.current);
              }}
            ></div>
            <video
              ref={vid6}
              poster={"./Assets/loading.gif"}
              src={"./Assets/Page-6.mp4"}
              className="img-fluid"
              autoPlay
              muted
              onEnded={() => {
                setShowPagination(true);
                vid6.current.play();
                setEncircled(7);
              }}
            ></video>
          </div>
          {pagination}
        </div>
      );
    case 7:
      return (
        <div className="page">
          {showPagination && scroll}
          <div className="wrapper position-relative">
            {hamburger}
            <video
              ref={vid7}
              poster={"./Assets/loading.gif"}
              src={"./Assets/Page-7.mp4"}
              className="img-fluid"
              autoPlay
              muted
              onEnded={() => {
                setShowPagination(true);
                setEncircled(1);
                vid7.current.play();
              }}
            ></video>
            <div className="black-hider"></div>
          </div>

          <h5 className="the-end text-center py-5">
            <b>THE END</b>
          </h5>
          <img className="img-fluid" src={"./Assets/Cover.png"} alt="" />

          {pagination}
        </div>
      );
    default:
      console.log("Invalid number provided");
  }
};

export default Vivid;
