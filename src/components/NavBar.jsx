import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/#">
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#process">
              How I Work
            </a>
            <a className="nav-link" href="#projects">
              My Projects
            </a>
            {/*<a className="nav-link" href="contact">
              Contact
            </a>*/}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
