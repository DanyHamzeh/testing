import React from "react";
import classes from "./OurProcess.module.css";
import Image from "../../Photos/01.From-idea-to. 1.png";

function OurProcess() {
  return (
    <div className={classes.picture_process}>
      <div className={classes.First_cont}>
        <h3 className="First-process">SOFTWARE DEVELOPMENT SERVICES</h3>
        <h2 className="Second-process">
          From idea to a market-ready product and everything in between.
        </h2>
        <p className="Third-process">
          We empower ideas through technology. It is what we do best, and we are
          proud of it. We nurture and enrich every project we work with by
          adding our passion,
          <br /> dedication, involvement, and knowledge.
        </p>
        <div className={classes.button_our}>
          <button className="button-Process">OUR PROCESS</button>
        </div>
      </div>

      <div className={classes.Image}>
        <img src={Image} alt="" />
      </div>
    </div>
  );
}

export default OurProcess;
