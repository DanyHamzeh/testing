import React from "react";
import classes from "./Twoboxes.module.css";

function Twoboxes() {
  return (
    <div className={classes.page_container}>
      <div className={classes.all_2boxes}>
        <div className={classes.first_box}>
          <p className="Our_process_word">OUR PROCESS</p>
        </div>
        <div className={classes.second_box}>
          <p className="Our_process_word">OUR WORK</p>
        </div>
      </div>
    </div>
  );
}

export default Twoboxes;
