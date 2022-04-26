import React from "react";
import mylogo from "../mylogo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="#">
          <img className="logo" src={mylogo} alt="logo..." />
        </Link>
        <button
          id="js-hamburger"
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                duration={1}
                smooth={true}
                to="home"
                offset={-110}
                className="nav-link"
                href="#"
              >
                home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                duration={1}
                smooth={true}
                to="aboutMe"
                offset={-110}
                className="nav-link"
                href="#"
              >
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                duration={1}
                smooth={true}
                to="experiences"
                offset={-110}
                className="nav-link"
                href="#"
              >
                experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                duration={1}
                smooth={true}
                to="contact"
                offset={-110}
                className="nav-link"
                href="#"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
