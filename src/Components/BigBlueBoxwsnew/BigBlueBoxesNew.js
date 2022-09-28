import React from "react";
import classes from "./BigBlueBoxesNew.module.css";

function BigBlueBoxesNew(props) {
  return (
    <div className={classes.page_container}>
      <div className={classes.boxes}>
        <div className={classes.Image_paragraph}>
          <img src={props.image} alt="" className={classes.image} />
          <h2 className={classes.title}>{props.title}</h2>
          <span>{props.paragraph}</span>
        </div>
      </div>
    </div>
  );
}

export default BigBlueBoxesNew;
