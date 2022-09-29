import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../Photos/Moobitek logo.png";
import classes from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={image} className={classes.logo} alt="" />
      </div>
      <nav>
        <ul className={click ? classes.nav_menu.active : classes.nav_menu}>
          <li>
            <Link to="/">OURWORK</Link>
          </li>
          <li>
            <Link to="/solutions">SOLUTIONS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.hamburger} onClick={handleClick}>
        {click ? (
          <FaTimes
            className={classes.FaTimes}
            size={20}
            style={{ color: "#000" }}
          />
        ) : (
          <FaBars
            size={20}
            className={classes.FaBars}
            style={{ color: "#000" }}
          />
        )}
      </div>
    </header>
  );
}

export default Navbar;
