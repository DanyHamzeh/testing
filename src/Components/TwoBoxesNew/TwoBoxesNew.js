import React from "react";
import classes from "./TwoBoxesNew.module.css";

function NewBoxesNew(props) {
  return (
    <div className={classes.twoBoxes}>
      <div className={classes.Boxes}>
        <p className={classes.word}>{props.title}</p>
      </div>
    </div>
  );
}

export default NewBoxesNew;
