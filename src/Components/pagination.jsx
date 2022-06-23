import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Pagination = ({
  setCurrentPage,
  currentPage,
  encircled,
  setEncircled,
  setPageToShow,
  setShowPagination,
  setPage1Show,
}) => {
  const defaultStyle = { cursor: "pointer", opacity: 0.5 };
  const enlargeStyle = { cursor: "pointer", transform: "scale(1.3,1.3)" };
  const navigate = useNavigate();

  const page1 = useRef();
  const page2 = useRef();
  const page3 = useRef();
  const page4 = useRef();
  const page5 = useRef();
  const page6 = useRef();
  const page7 = useRef();

  const showHideVariant = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, duration: 0.3 },
    },
  };
  const control = useAnimation();
  const [viewRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={viewRef}
      initial="hidden"
      variants={showHideVariant}
      animate={control}
      className="contaier-fluid d-flex justify-content-center align-items-center py-5"
    >
      <div className="pagination d-flex justify-content-around align-items-center w-50">
        <h5
          ref={page1}
          style={currentPage === 1 ? enlargeStyle : defaultStyle}
          onClick={() => {
            setShowPagination(false);
            setCurrentPage(1);
            setEncircled(0);
            setPage1Show(false);
          }}
          className={encircled === 1 ? "mb-0 set-encircled" : "mb-0"}
        >
          1
        </h5>

        <h5
          ref={page2}
          style={currentPage === 2 ? enlargeStyle : defaultStyle}
          onClick={() => {
            setShowPagination(false);
            setCurrentPage(2);
            setEncircled(0);
          }}
          className={encircled === 2 ? "mb-0 set-encircled" : "mb-0"}
        >
          2
        </h5>

        <h5
          animate={null}
          ref={page3}
          style={currentPage === 3 ? enlargeStyle : defaultStyle}
          onClick={() => {
            setShowPagination(false);
            setCurrentPage(3);
            setEncircled(0);
          }}
          className={encircled === 3 ? "mb-0 set-encircled" : "mb-0"}
        >
          3
        </h5>

        {currentPage === 7 && (
          <img
            src="./Assets/Home Button.png"
            onClick={() => {
              setShowPagination(false);
              navigate("/", { replace: true });
              setPageToShow(0);
            }}
            alt="home"
            width="40px"
          />
        )}

        <h5
          ref={page4}
          style={currentPage === 4 ? enlargeStyle : defaultStyle}
          onClick={() => {
            setShowPagination(false);
            setCurrentPage(4);
            setEncircled(0);
          }}
          className={encircled === 4 ? "mb-0 set-encircled" : "mb-0"}
        >
          4
        </h5>

        <h5
          ref={page5}
          style={currentPage === 5 ? enlargeStyle : defaultStyle}
          onClick={() => {
            setShowPagination(false);
            setCurrentPage(5);
            setEncircled(0);
          }}
          className={encircled === 5 ? "mb-0 set-encircled" : "mb-0"}
        >
          5
        </h5>

        <h5
          ref={page6}
          style={currentPage === 6 ? enlargeStyle : defaultStyle}
          onClick={() => {
            setShowPagination(false);
            setCurrentPage(6);
            setEncircled(0);
          }}
          className={encircled === 6 ? "mb-0 set-encircled" : "mb-0"}
        >
          6
        </h5>

        <h5
          ref={page7}
          style={currentPage === 7 ? enlargeStyle : defaultStyle}
          onClick={() => {
            setShowPagination(false);
            setCurrentPage(7);
            setEncircled(0);
          }}
          className={encircled === 7 ? "mb-0 set-encircled" : "mb-0"}
        >
          7
        </h5>
      </div>
    </motion.div>
  );
};

export default Pagination;
