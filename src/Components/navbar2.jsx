const Navbar2 = ({ disabledVivid, setPageToShow, pageToShow }) => {
  return (
    <div>
      <nav
        className={
          pageToShow == 1 || pageToShow == 2
            ? "vivid-navbar-with-bg w-100 p-0 d-flex justify-content-center align-items-center"
            : "vivid-navbar p-0 d-flex justify-content-center align-items-center"
        }
      >
        <div
          className={`view-now-2-wrapper ${
            pageToShow == 1 || pageToShow == 2 ? "d-none" : ""
          }`}
        >
          <div className="view-now-2 mx-4 d-flex justify-content-center align-items-center">
            <p className="mb-0 text-white">View Now.</p>
            <img
              className="view-now-2-tail"
              src={"./Assets/view-now-tail.png"}
              alt=""
            />
          </div>
        </div>
        <div
          className={`navbar-background ${
            pageToShow == 0 ? "d-none d-md-block" : ""
          }`}
        ></div>
        <div className="row w-100">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <a className="nav-item nav-link client-name text-nowrap" href="/">
              Keith Dela Cruz
            </a>
          </div>
          <div className="col-8 d-flex justify-content-end align-items-center">
            <div className="navbar-nav d-flex flex-row justify-content-center align-items-center">
              <a
                onClick={() => setPageToShow(0)}
                className="nav-item nav-link d-flex justify-content-center align-items-center"
                href="#"
              >
                HOME
                <span className={pageToShow == 0 ? "arrow-down" : ""}></span>
              </a>

              <a
                className="nav-item nav-link d-flex justify-content-center align-items-center"
                onClick={() => {
                  setPageToShow(1);
                }}
              >
                FEATURES
                <span className={pageToShow == 1 ? "arrow-down" : ""}></span>
              </a>
              <a
                onClick={() => {
                  setPageToShow(2);
                }}
                style={
                  disabledVivid
                    ? { color: "#F39D47", opacity: 0.5 }
                    : { color: "#F39D47" }
                }
                className={
                  disabledVivid
                    ? "nav-item nav-link d-flex justify-content-center align-items-center disabled"
                    : "nav-item nav-link d-flex justify-content-center align-items-center"
                }
                href="#"
              >
                VIVID
                <span className={pageToShow == 2 ? "arrow-down" : ""}></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
