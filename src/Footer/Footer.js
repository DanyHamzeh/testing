import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import Image from "../Photos/Moobitek logo.png";

function Footer() {
  return (
    <div className={classes.main_footer}>
      <div className={classes.first_text}> achieve the extraordinary</div>
      <div className={classes.second_text}>
        <button className={classes.btn}>
          <p className={classes.in}>learn more</p>
        </button>
      </div>
      <div className={classes.low_footer}>
        <div className={classes.list_footer}>
          <nav>
            <ul>
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
        </div>
        <p className={classes.copy_text}>
          © 2021 - Moobitek all rights reserved
        </p>
        <img src={Image} alt="" className={classes.logo} />
      </div>
    </div>
  );
}

export default Footer;
