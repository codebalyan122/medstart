import { Link } from "react-router-dom";
import React, { useState } from "react";
import Hamburger from "./Hamburger";
import "../styles/Navbar.css";
import Logo from "../images/favicon.png";

const NavbarComp = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <img src={Logo} alt="Logo" style={{ height: "50px", width: "50px" }} />
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/all-medicines">All medicines</Link>
            </li>
            <li>
              <Link to="/add-medicine">Add Medicine</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
