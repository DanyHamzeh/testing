import React from "react";
import classes from "./RightNowNew.module.css";

function RightNowNew(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div className={classes.all_right}>
        <img src={props.photos} alt="" className={classes.image} />
        <h1 className={classes.description}>{props.description}</h1>
        <p className={classes.paragraph}>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default RightNowNew;
