import React from "react";
import classes from "./BigBlue.module.css";
import Image1 from "../../Photos/ux-ui.png";
import Image2 from "../../Photos/Web-development 1.png";
import Image3 from "../../Photos/Web-development 1.png";
import Image4 from "../../Photos/artificial-inteligence 1.png";
import Image5 from "../../Photos/project-management 1.png";
import Image6 from "../../Photos/IT-consulting 1.png";

function BigBlue() {
  return (
    <div className={classes.page_container}>
      <div className={classes.all_boxes}>
        <div className={classes.First_2boxes}>
          <div className={classes.box1}>
            <img src={Image1} alt="" className={classes.Image1} />
            <p className="big-blue-text">Web Development</p>
            <p className="big-blue-paragraph">
              We gather our web development experience of over a decade, to
              develop and deliver web apps that solve real problems.
            </p>
          </div>
          <div className={classes.box2}>
            <img src={Image2} alt="" className={classes.Image2} />
            <p className="big-blue-text">UX/UI Design</p>
            <p className="big-blue-paragraph">
              Combining streamlined user experiences with outstanding visuals,
              our team of UI & UX experts will make sure that your product
              delivers the best journey to its users.
            </p>
          </div>
        </div>
        <div className={classes.Second_2boxes}>
          <div className={classes.box1}>
            <img src={Image3} alt="" className={classes.Image3} />
            <p className="big-blue-text">Mobile Development</p>
            <p className="big-blue-paragraph">
              With a team of skillful mobile developers, we build top-notch
              Android, iOS, and cross-platform apps, from concept to a fully
              functional digital product.
            </p>
          </div>
          <div className={classes.box2}>
            <img src={Image4} alt="" className={classes.Image4} />
            <p className="big-blue-text">Machine Learning</p>
            <p className="big-blue-paragraph">
              We help you turn data and technology into your most powerful
              asset. Through advanced algorithms, we help you automate processes
              and prioritize routine decision-making.
            </p>
          </div>
        </div>
        <div className={classes.Second_3boxes}>
          <div className={classes.box1}>
            <img src={Image5} alt="" className={classes.Image5} />
            <p className="big-blue-text">Project Management and QA</p>
            <p className="big-blue-paragraph">
              Your project is in good hands, so you do not need to worry about
              the project management, as we have it covered.
            </p>
          </div>
          <div className={classes.box2}>
            <img src={Image6} alt="" className={classes.Image6} />
            <p className="big-blue-text">IT Consulting</p>
            <p className="big-blue-paragraph">
              Many products rise, only a few thrive on the market. As a tech
              partner, we will lead the line for you, making sure that your
              product is a front-runner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigBlue;
