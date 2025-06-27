import React from "react";
import styles from "./Faq.module.css";
import star from "../../Assets/Star_sec2.png";

const Section8 = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.middlecontainer}>
        <div className={styles.topcontainer}>
          <h3>
            <img src={star} alt="" />
            Frequently asked questions
          </h3>
        </div>
        <div className={styles.bottomcontainer}>
          <div className={styles.topdiv}>
            <h4>What is your design process?</h4>
            <p>
              My design process typically involves four key phases: research,
              design, prototype, and test. In the research phase, I gather
              insights about the user and their needs. In the design phase, I
              create wireframes and visual designs that meet those needs. In the
              prototype phase, I create interactive models of the design for
              testing. In the test phase, I collect feedback from users to
              refine the design.
            </p>
          </div>
          <div className={styles.middlediv}>
            <h4>What tools and software do you use for UX design?</h4>
          </div>
          <div className={styles.bottomdiv}>
            <h4>How do you measure the success of your UX designs?</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section8;
