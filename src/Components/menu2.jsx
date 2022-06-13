import { useState } from "react";
import { motion } from "framer-motion";

const Menu2 = ({ setCurrentPage }) => {
  const [panels] = useState([
    {
      id: 1,
      pageNumber: "01",
      imgLink: "Assets/Page1_q.png",
      animate: { x: -100 },
    },
    {
      id: 2,
      pageNumber: "02",
      imgLink: "Assets/Page2_o.png",
      animate: { x: 100 },
    },
    {
      id: 3,
      pageNumber: "03",
      imgLink: "Assets/Page3_p.png",
      animate: { x: -100 },
    },
    {
      id: 4,
      pageNumber: "04",
      imgLink: "Assets/Page4_q.png",
      animate: { x: 100 },
    },
    {
      id: 5,
      pageNumber: "05",
      imgLink: "Assets/Page5_r.png",
      animate: { x: -100 },
    },
    {
      id: 6,
      pageNumber: "06",
      imgLink: "Assets/Page6_s.png",
      animate: { x: 100 },
    },
  ]);

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <motion.div
      className="menu border border-light mx-3"
      initial={{ background: "#707070" }}
      animate={{ background: "#000000" }}
      transition={{ duration: 0.4 }}
    >
      <img
        className="hamburger"
        src="./Assets/hamburger.png"
        width="100px"
        alt="hamburger"
      />
      <div className="container-fluid">
        <div className="row">
          {panels.map((panel) => {
            return (
              <motion.div
                initial={panel.animate}
                animate={{ x: 0 }}
                key={panel.id}
                className="col-6 my-3 d-flex justify-content-center align-items-center"
              >
                <div
                  className="page-wrapper p-3"
                  id={"panel-" + panel.id.toString()}
                >
                  <div className="page-number d-flex justify-content-start align-items-center">
                    <h1 className="text-white">{panel.pageNumber}</h1>
                    <p className="mb-0">PAGE</p>
                  </div>
                  <div className="panel-wrapper">
                    <img
                      onClick={() => {
                        handleMenuClick(panel.id);
                      }}
                      src={panel.imgLink}
                      alt=""
                      width="200px"
                    />
                    {panel.badge}
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="col-3 d-flex justify-content-center align-items-center">
            <div className="circle d-flex justify-content-center align-items-center flex-column">
              <h1 className="mb-0 text-white">
                <b>VIVID</b>
              </h1>
              <h5 className="text-white align-self-end">enjoy!</h5>
            </div>
          </div>
          <div className="col-6 my-3 d-flex justify-content-center= align-items-center">
            <div className="page-wrapper">
              <div className="page-number d-flex justify-content-start align-items-center">
                <h1 className="text-white">07</h1>
                <p className="mb-0">PAGE</p>
              </div>
              <div className="panel-wrapper">
                <img
                  onClick={() => {
                    handleMenuClick(7);
                  }}
                  src="Assets/Page7_w.png"
                  alt=""
                  width="200px"
                />
              </div>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center">
            <div className="circle d-flex justify-content-center align-items-center">
              <p className="mb-0 mt-5 text-white">Expanded Comics</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu2;
