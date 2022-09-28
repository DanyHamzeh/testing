import React from "react";
// import BigBlue from "../Components/BigBlueBoxes/BigBlue";
import BoxesNew from "../Components/boxesNew/BoxesNew";
// import Boxes from "../Components/Boxes/Boxes";
import Committed from "../Components/Commited/Commited";
import OurProcess from "../Components/OurProcess/OurProcess";
// import RightNow from "../Components/RightNow/RightNow";
// import TwoBoxes from "../Components/Twoboxes/Twoboxes";
import classes from "../Pages/ourWork.module.css";
import Image1 from "../Photos/10.png";
import Image2 from "../Photos/tech-adv.png";
import Image3 from "../Photos/ux-ui.png";
import Image4 from "../Photos/endtoend.png";
import Image5 from "../Photos/50.png";
import Image6 from "../Photos/creatjve.png";
import BigBlueBoxesNew from "../Components/BigBlueBoxwsnew/BigBlueBoxesNew";
import FirstImage1 from "../Photos/ux-ui.png";
import FirstImage2 from "../Photos/Web-development 1.png";
import FirstImage3 from "../Photos/Mobile-development 1 (1).png";
import FirstImage4 from "../Photos/artificial-inteligence 1.png";
import FirstImage5 from "../Photos/project-management 1.png";
import FirstImage6 from "../Photos/IT-consulting 1.png";

function OurWork(props) {
  return (
    <div className={classes.Domain_Container}>
      <OurProcess />
      <div className={classes.all_Boxes}>
        <div className={classes.First_3Boxes}>
          <BoxesNew title="Years of experience" order="first" />
          <BoxesNew title={"Technical Consultancy"} order={"first"} />
          <BoxesNew title={"UI/UX Approach"} order={"first"} />
        </div>
        <div className={classes.Second_3Boxes}>
          <BoxesNew
            title={"End-to-end Software development"}
            order={"second"}
          />
          <BoxesNew FirstImage={Image5} title={"A players"} order={"second"} />
          <BoxesNew title={"Creative engineering mindset"} order={"second"} />
        </div>
      </div>
      <Committed className={classes.Committed} />
      <div className={classes.first_2boxes}>
        <BigBlueBoxesNew
          image={FirstImage1}
          title={"UX/UI Design"}
          paragraph={
            "Combining streamlined user experiences with outstanding visuals, our team of UI & UX experts will make sure that your product delivers the best journey to its users."
          }
        />
        <BigBlueBoxesNew
          image={FirstImage2}
          title={"Web Development"}
          paragraph={
            "We gather our web development experience of over a decade, to develop and deliver web apps that solve real problems."
          }
        />
      </div>
      <div className={classes.second_2boxes}>
        <BigBlueBoxesNew
          image={FirstImage3}
          title={"Mobile Development"}
          paragraph={
            "With a team of skillful mobile developers, we build top-notch Android, iOS, and cross-platform apps, from concept to a fully functional digital product."
          }
        />
        <BigBlueBoxesNew
          image={FirstImage4}
          title={"Machine Learning"}
          paragraph={
            "We help you turn data and technology into your most powerful asset. Through advanced algorithms, we help you automate processes and prioritize routine decision-making."
          }
        />
      </div>
      <div className={classes.third_2boxes}>
        <BigBlueBoxesNew
          image={FirstImage5}
          title={"Project Management and QA"}
          paragraph={
            "Your project is in good hands, so you do not need to worry about the project management, as we have it covered."
          }
        />
        <BigBlueBoxesNew
          image={FirstImage6}
          title={"IT Consulting"}
          paragraph={
            "Many products rise, only a few thrive on the market. As a tech partner, we will lead the line for you, making sure that your product is a front-runner."
          }
        />
      </div>

      {/* <RightNow /> */}
      {/* <TwoBoxes /> */}
    </div>
  );
}

export default OurWork;
