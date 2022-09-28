import React from "react";
import { Link } from "react-router-dom";
import image from "../Photos/Moobitek logo.png";
import classes from "./Navbar.module.css";

function Navbar() {
  //   const [click, setclick] = useState(false);
  //   const handleClick = () => setclick(!click);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={image} className={classes.logo} alt="" />
      </div>
      <nav>
        <ul className={classes.nav_menu}>
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
    </header>
  );
}

export default Navbar;
