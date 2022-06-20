const Navbar = ({ disabledVivid }) => {
  return (
    <div>
      <nav className="navbar p-0 d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <a
              className="nav-item nav-link text-secondary text-nowrap"
              href="/"
            >
              Keith Dela Cruz
            </a>
          </div>
          <div className="col-8 d-flex justify-content-end align-items-center">
            <div className="navbar-nav d-flex flex-row justify-content-center align-items-center">
              <a className="nav-item nav-link" href="/">
                HOME
              </a>
              <a
                className="nav-item nav-link"
                onClick={() =>
                  document
                    .getElementById("start-cue-center")
                    .scrollIntoView(true)
                }
              >
                FEATURES
              </a>
              <a
                style={
                  disabledVivid
                    ? { color: "#F39D47", opacity: 0.5 }
                    : { color: "#F39D47" }
                }
                className={
                  disabledVivid
                    ? "nav-item nav-link disabled"
                    : "nav-item nav-link"
                }
                href="#"
              >
                VIVID
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
