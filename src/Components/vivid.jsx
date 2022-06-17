import Menu2 from "./menu2";
import Pagination from "./pagination";
import { useRef } from "react";
import { motion } from "framer-motion";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const Vivid = ({
  currentPage,
  setCurrentPage,
  encircled,
  setEncircled,
  setPageToShow,
  showPagination,
  setShowPagination,
}) => {
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
    <div className="container-fluid hamburger-wrapper d-flex justify-content-start align-items-center">
      <img
        onClick={() => setCurrentPage(0)}
        src="./Assets/hamburger.png"
        alt="hamburger"
        width="100px"
      />
    </div>
  );

  const vid1 = useRef();
  const vid2 = useRef();
  const vid3 = useRef();
  const vid4 = useRef();
  const vid5 = useRef();
  const vid6 = useRef();
  const vid7 = useRef();

  switch (currentPage) {
    case 0:
      return <Menu2 setCurrentPage={setCurrentPage} />;

    case 1:
      return (
        <div className="page">
          {showPagination && scroll}
          {hamburger}
          <div className="video-wrapper py-5">
            <p className="mb-0 text-white text-nowrap">
              I'm not sure if I can still remember
            </p>
            <img
              className="img-fluid tangled3"
              src="./Assets/TangledMind3.png"
              alt="tangled mind 3"
              width="600px"
            />

            <video
              ref={vid1}
              className="img-fluid"
              autoPlay
              muted
              onEnded={() => {
                vid1.current.play();
                setShowPagination(true);
              }}
            >
              <source src={"./Assets/Page 1.mp4"} type="video/mp4" />
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
            <p className="text-white text-center">
              or when I last took a glance of my own reflection
            </p>
            <div className="cover-wrapper text-white d-flex justify-content-center align-items-center flex-column">
              <img className="img-fluid" src="./Assets/Cover.png" alt="" />
              <p className="first-text">I don't know why</p>
              <div className="grey-background align-self-start">
                <p className="mb-0">I'm suddenly thinking about it</p>
              </div>
            </div>
            <p className="text-white mx-5 mt-3">. . .</p>
          </div>
          <div className="A-panel-wrapper text-white">
            <p>It's been so long</p>
            <img
              src="./Assets/A-Panel1-2_w@2x (1).png"
              className="img-fluid"
              alt=""
            />
          </div>

          {pagination}
        </div>
      );

    case 2:
      return (
        <div className="page">
          {showPagination && scroll}
          {hamburger}
          <div className="wrapper">
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
          </div>
          {showPagination && pagination}
        </div>
      );
    case 3:
      return (
        <div className="page">
          {showPagination && scroll}
          {hamburger}
          <div className="wrapper">
            <video
              ref={vid3}
              poster={"./Assets/loading.gif"}
              src={"./Assets/Page-3.mp4"}
              className="img-fluid"
              autoPlay
              muted
              onEnded={() => {
                setShowPagination(true);
                vid3.current.play();
                setEncircled(4);
              }}
            ></video>
          </div>
          {showPagination && pagination}
        </div>
      );
    case 4:
      return (
        <div className="page">
          {showPagination && scroll}
          <div className="wrapper">
            {hamburger}
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
          </div>
          {showPagination && pagination}
        </div>
      );
    case 5:
      return (
        <div className="page">
          {showPagination && scroll}

          <div className="wrapper">
            {hamburger}
            <video
              ref={vid5}
              poster={"./Assets/loading.gif"}
              src={"./Assets/page-5.mp4"}
              className="img-fluid"
              autoPlay
              muted
              onEnded={() => {
                setShowPagination(true);
                vid5.current.play();
                setEncircled(6);
              }}
            ></video>
          </div>
          {showPagination && pagination}
        </div>
      );
    case 6:
      return (
        <div className="page">
          {showPagination && scroll}
          <div className="wrapper">
            {hamburger}
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
          {showPagination && pagination}
        </div>
      );
    case 7:
      return (
        <div className="page">
          {showPagination && scroll}
          <div className="wrapper">
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
                vid7.current.play();
                setEncircled(3);
              }}
            ></video>
          </div>

          <h5 className="the-end text-center py-5">
            <b>THE END</b>
          </h5>
          <img className="img-fluid" src={"./Assets/Cover.png"} alt="" />

          {showPagination && pagination}
        </div>
      );
    default:
      console.log("Invalid number provided");
  }
};

export default Vivid;
