import classes from "./BoxesNew.module.css";
import React from "react";

function BoxesNew(props) {
  return (
    <div className={classes.box1}>
      <div className={classes.Text_Image}>
        <div className={classes.circle1}>
          <img src={props.Images} alt="" className={classes.Image} />
        </div>
        <span className={classes.text}>{props.title}</span>
      </div>
    </div>
  );
}

export default BoxesNew;
