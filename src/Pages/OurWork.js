import React from "react";
// import BigBlue from "../Components/BigBlueBoxes/BigBlue";
import BoxesNew from "../Components/boxesNew/BoxesNew";
// import Boxes from "../Components/Boxes/Boxes";
import Committed from "../Components/Commited/Commited";
import OurProcess from "../Components/OurProcess/OurProcess";
import RightNow from "../Components/RightNow/RightNow";
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
import TwoBoxesNew from "../Components/TwoBoxesNew/TwoBoxesNew";
// import RightNowNew from "../Components/RightNowNew/RightNowNew";
// import photo1 from "../Photos/1.png";
// import photo2 from "../Photos/2.png";
// import photo3 from "../Photos/3.png";

function OurWork(props) {
  return (
    <div className={classes.Domain_Container}>
      <OurProcess />
      <div className={classes.all_Boxes}>
        <BoxesNew Images={Image1} title="Years of experience" />
        <BoxesNew Images={Image2} title={"Technical Consultancy"} />
        <BoxesNew Images={Image3} title={"UI/UX Approach"} />
        <BoxesNew Images={Image4} title={"End-to-end Software development"} />
        <BoxesNew Images={Image5} title={"A players"} />
        <BoxesNew Images={Image6} title={"Creative engineering mindset"} />
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
        {/* <div className={classes.right_now}>
          <RightNowNew
            photos={1}
            description={"Start from scratch"}
            paragraph={"From idea to market ready we've got you covered."}
          />
          <RightNowNew
            title={"Where are you right now?"}
            photos={2}
            description={"Ready for the next step"}
            paragraph={
              "In search of a team to help you get your product to the next level? We are here for you."
            }
          />
          <RightNowNew
            photos={3}
            description={"Subtle improvements"}
            paragraph={
              "Need to refine or add new features to your product? We can ease the process."
            }
          />
        </div> */}
        <RightNow />
        <div className={classes.twoBoxes}>
          <TwoBoxesNew title={"OUR PROCESS"} />
          <TwoBoxesNew title={"OUR WORK"} />
        </div>
        {/* <TwoBoxes />  */}
      </div>
    </div>
  );
}

export default OurWork;
