import React from "react";
import classes from "./Boxes.module.css";
import Image from "../../Photos/Ellipse 1.png";
import Image1 from "../../Photos/10.png";
import Image2 from "../../Photos/tech-adv (1).png";
import Image3 from "../../Photos/ux-ui.png";
import Image4 from "../../Photos/endtoend.png";
import Image5 from "../../Photos/50.png";
import Image6 from "../../Photos/creatjve.png";

function Boxes() {
  return (
    <div className={classes.Boxes_Container}>
      <div className={classes.First_3Boxes}>
        <div className={classes.box1}>
          <div className={classes.first_border}>
            <img src={Image} alt="" className={classes.img} />
            <img src={Image1} alt="" className={classes.img1} />
            <div>
              <p className="blue-text">
                Years of
                <br /> experience
              </p>
            </div>
          </div>
        </div>
        <div className={classes.Second_border}>
          <img src={Image} alt="" className={classes.img} />
          <img src={Image2} alt="" className={classes.img1} />
          <div>
            <p className="blue-text">
              Technical
              <br /> Consultancy
            </p>
          </div>
        </div>
        <div className={classes.Second_border}>
          <img src={Image} alt="" className={classes.img} />
          <img src={Image3} alt="" className={classes.img1} />
          <div>
            <p className="blue-text">
              UI/UX
              <br /> Approach
            </p>
          </div>
        </div>
      </div>
      <div className={classes.Second_3Boxes}>
        <div className={classes.Second_border}>
          <img src={Image} alt="" className={classes.img} />
          <img src={Image4} alt="" className={classes.img1} />
          <div>
            <p className="blue-text">
              End-to-end
              <br /> Software development
            </p>
          </div>
        </div>
        <div className={classes.Second_border}>
          <img src={Image} alt="" className={classes.img} />
          <img src={Image5} alt="" className={classes.img1} />
          <div>
            <p className="blue-text">
              UI/UX
              <br /> Approach
            </p>
          </div>
        </div>
        <div className={classes.Second_border}>
          <img src={Image} alt="" className={classes.img} />
          <img src={Image6} alt="" className={classes.img1} />
          <div>
            <p className="blue-text">
              UI/UX
              <br /> Approach
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
