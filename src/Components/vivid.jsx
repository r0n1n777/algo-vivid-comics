import Menu2 from "./menu2";
import Pagination from "./pagination";
import { Component } from "react";

class Vivid extends Component {
  render() {
    const {
      currentPage,
      setCurrentPage,
      encircled,
      setEncircled,
      setPageToShow,
    } = this.props;
    const pagination = (
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        encircled={encircled}
        setEncircled={setEncircled}
        setPageToShow={setPageToShow}
      />
    );

    switch (currentPage) {
      case 0:
        return <Menu2 setCurrentPage={setCurrentPage} />;

      case 1:
        return (
          <div className="page">
            <img
              onClick={() => setCurrentPage(0)}
              src="./Assets/hamburger.png"
              alt="hamburger"
              width="100px"
            />
            <div className="scroll-button d-flex justify-content-end align-items-center w-100">
              <img src={"./Assets/Scroll.png"} alt="scroll" width="30px" />
            </div>

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

              <video className="img-fluid" autoPlay muted loop>
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
            <div className="scroll-button d-flex justify-content-end align-items-center w-100">
              <img src={"./Assets/Scroll.png"} alt="scroll" width="30px" />
            </div>
            <div className="wrapper">
              <img
                src="./Assets/hamburger.png"
                alt="hamburger"
                width="100px"
                onClick={() => {
                  setCurrentPage(0);
                }}
              />
              <video
                poster={"./Assets/loading.gif"}
                src={"./Assets/Page2_1.mp4"}
                className="img-fluid"
                autoPlay
                muted
                onEnded={() => setEncircled(3)}
              ></video>
            </div>
            {pagination}
          </div>
        );
      case 3:
        return (
          <div className="page">
            <div className="scroll-button d-flex justify-content-end align-items-center w-100">
              <img src={"./Assets/Scroll.png"} alt="scroll" width="30px" />
            </div>
            <div className="wrapper">
              <img
                src="./Assets/hamburger.png"
                alt="hamburger"
                width="100px"
                onClick={() => {
                  setCurrentPage(0);
                }}
              />
              <video
                poster={"./Assets/loading.gif"}
                src={"./Assets/Page3.mp4"}
                className="img-fluid"
                autoPlay
                muted
                onEnded={() => setEncircled(4)}
              ></video>
            </div>
            {pagination}
          </div>
        );
      case 4:
        return (
          <div className="page">
            <div className="scroll-button d-flex justify-content-end align-items-center w-100">
              <img src={"./Assets/Scroll.png"} alt="scroll" width="30px" />
            </div>
            <div className="wrapper">
              <img
                src="./Assets/hamburger.png"
                alt="hamburger"
                width="100px"
                onClick={() => {
                  setCurrentPage(0);
                }}
              />
              <video
                poster={"./Assets/loading.gif"}
                src={"./Assets/Page4.mp4"}
                className="img-fluid"
                autoPlay
                muted
                onEnded={() => setEncircled(5)}
              ></video>
            </div>
            {pagination}
          </div>
        );
      case 5:
        return (
          <div className="page">
            <div className="scroll-button d-flex justify-content-end align-items-center w-100">
              <img src={"./Assets/Scroll.png"} alt="scroll" width="30px" />
            </div>
            <div className="wrapper">
              <img
                src="./Assets/hamburger.png"
                alt="hamburger"
                width="100px"
                onClick={() => {
                  setCurrentPage(0);
                }}
              />
              <video
                poster={"./Assets/loading.gif"}
                src={"./Assets/page5.mp4"}
                className="img-fluid"
                autoPlay
                muted
                onEnded={() => setEncircled(6)}
              ></video>
            </div>
            {pagination}
          </div>
        );
      case 6:
        return (
          <div className="page">
            <div className="scroll-button d-flex justify-content-end align-items-center w-100">
              <img src={"./Assets/Scroll.png"} alt="scroll" width="30px" />
            </div>
            <div className="wrapper">
              <img
                src="./Assets/hamburger.png"
                alt="hamburger"
                width="100px"
                onClick={() => {
                  setCurrentPage(0);
                }}
              />
              <video
                poster={"./Assets/loading.gif"}
                src={"./Assets/Page-6.mp4"}
                className="img-fluid"
                autoPlay
                muted
                onEnded={() => setEncircled(7)}
              ></video>
            </div>
            {pagination}
          </div>
        );
      case 7:
        return (
          <div className="page">
            <div className="scroll-button d-flex justify-content-end align-items-center w-100">
              <img src={"./Assets/Scroll.png"} alt="scroll" width="30px" />
            </div>
            <div className="wrapper">
              <img
                src="./Assets/hamburger.png"
                alt="hamburger"
                width="100px"
                onClick={() => {
                  setCurrentPage(0);
                }}
              />
              <video
                poster={"./Assets/loading.gif"}
                src={"./Assets/Page7-Final_1.mp4"}
                className="img-fluid"
                autoPlay
                muted
              ></video>
            </div>

            <h5 className="the-end text-center py-5">
              <b>THE END</b>
            </h5>
            <img className="img-fluid" src={"./Assets/cover.png"} alt="" />

            {pagination}
          </div>
        );
      default:
        console.log("Invalid number provided");
    }
  }
}

export default Vivid;
