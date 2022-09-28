import React from "react";
import classes from "./RightNow.module.css";
import Image1 from "../../Photos/1.png";
import Image2 from "../../Photos/2.png";
import Image3 from "../../Photos/3.png";

function RightNow() {
  return (
    <div className={classes.page_container}>
      <h1 className="right-now-text">Where are you right now?</h1>
      <div className={classes.all_rights}>
        <div className={classes.first_mobile}>
          <img src={Image1} alt="" className={classes.Image1} />
          <p className="first1-paragraph">Start from scratch</p>
          <p className="second1-paragraph">
            From idea to market ready we've got you
            <br />
            <span className="second1-paragraph-word"> covered.</span>
          </p>
        </div>
        <div className={classes.second_right}>
          <div className={classes.side_mobile}>
            <img src={Image2} alt="" />
            <p className="first2-paragraph">Ready for the next step</p>
            <p className="second2-paragraph">
              In search of a team to help you get your product to the next
              level?
              <br />
              We are here for you.
            </p>
          </div>
        </div>
        <div className={classes.third_mobile}>
          <img src={Image3} alt="" />
          <p className="first3-paragraph">Subtle improvements</p>
          <p className="second3-paragraph">
            Need to refine or add new features to your product? We can ease the
            process.
          </p>
        </div>
        <div className={classes.last_btn_mobile}></div>
      </div>
      <div className={classes.button_both}>
        <button className="right-button1">
          <span className="btn-color1">TELL US ABOUT YOUR PROJECT</span>{" "}
        </button>
      </div>
    </div>
  );
}

export default RightNow;
