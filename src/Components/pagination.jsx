import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="contaier-fluid d-flex justify-content-center align-items-center py-0 py-sm-5"
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
