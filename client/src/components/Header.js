import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
//import logo from "./images/collage-logo-v2.svg";
import logo from "./images/vectorpaint.svg";

const Header = () => {
  return (
    <header>
      <div className="logo-combined">
        <Link to="/home" className="cta">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="logo-text">
          <Link to="/home" className="cta">
            SNAPSHOT COLLAGE
          </Link>
        </div>
      </div>
      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/image-search">Search</Link>
          </li>
          <li>
            <Link to="/display-collection">Display</Link>
          </li>
        </ul>
      </nav>
      <div className="button-container">
        <Link to="/contact" className="cta">
          <button>Contact</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
