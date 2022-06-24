import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ setShowModal, vidInModal, showModal }) => {
  const modalVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -200 },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          key="modal"
          className="backdrop d-flex justify-content-center align-items-center"
          variants={modalVariant}
          initial="hidden"
          animate="visible"
          exit={{ y: 200, opacity: 0 }}
          transition={{
            y: { type: "spring", stiffness: 200, bounce: 0.5 },
          }}
        >
          <div className="modal-wrapper container d-flex justify-content-center align-items-center">
            <img
              src="./Assets/close-btn.png"
              alt=""
              width="60px"
              onClick={() => setShowModal(false)}
            />
            <video
              poster={"./Assets/loading.gif"}
              src={vidInModal}
              className="img-fluid modal-vid my-1"
              autoPlay
              muted
              loop
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
