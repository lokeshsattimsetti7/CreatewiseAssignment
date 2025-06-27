import React from "react";
import styles from "./Experience.module.css";
import star from "../../Assets/Star_sec2.png";
const Section5 = () => {
  return (
    <div className={styles.Maincontainer}>
      <div className={styles.middlecontainer}>
        <div className={styles.topcontainer}>
          <h3>
            <img src={star} alt="" />
            Experience
          </h3>
        </div>
        <div className={styles.bottomcontainer}>
          <div className={styles.div1}>
            <div className={styles.leftdiv}>
              <h4>Lead Product Designer</h4>
            </div>
            <div className={styles.rightdiv}>
              <h5>Fortknox</h5>
              <p>mar 2022-Oct 2023</p>
            </div>
          </div>
          <hr />
          <div className={styles.div1}>
            <div className={styles.leftdiv}>
              <h4>Intern Designer</h4>
            </div>
            <div className={styles.rightdiv}>
              <h5>OmniSafe</h5>
              <p>mar 2022-Oct 2023</p>
            </div>
          </div>
          <hr />
          <div className={styles.div1}>
            <div className={styles.leftdiv}>
              <h4>UI Designer</h4>
            </div>
            <div className={styles.rightdiv}>
              <h5>Dorasesign</h5>
              <p>mar 2022-Oct 2023</p>
            </div>
          </div>
          <hr />
          <div className={styles.div1}>
            <div className={styles.leftdiv}>
              <h4>Frontend Developer</h4>
            </div>
            <div className={styles.rightdiv}>
              <h5>OpacityAuthor</h5>
              <p>mar 2022-Oct 2023</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default Section5;
