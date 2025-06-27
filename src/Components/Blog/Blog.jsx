import React from "react";
import styles from "./Blog.module.css";
import star from "../../Assets/Star_sec2.png";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";

const Section6 = () => {
  return (
    <div className={styles.Maincontainer}>
      <div className={styles.middlecontainer}>
        <div className={styles.topcontainer}>
          <div>
            <h3>
              {" "}
              <img src={star} alt="" />
              Blog
            </h3>
          </div>

          <div className={styles.para}>
            <p>view all</p>
          </div>
        </div>
        <div className={styles.bottomcontainer}>
          <div className={styles.div1}>
            <div className={styles.leftdiv}>
              <img src={image1} alt="" />
              <div className={styles.middlediv}>
                <p>Nov 9, 2023</p>
                <h3>How UX works in web</h3>
                <div className={styles.text}>
                  <p>UI</p>
                  <p>UX</p>
                </div>
              </div>
            </div>
            <div className={styles.rightdiv}>
              <p>Read</p>
            </div>
          </div>
          <div className={styles.div1}>
            <div className={styles.leftdiv}>
              <img src={image2} alt="" />
              <div className={styles.middlediv}>
                <p>Aug 18, 2023</p>
                <h3>Case study - Analysis Application.</h3>
                <div className={styles.text}>
                  <p>DESIGN</p>
                  <p>PRINT</p>
                </div>
              </div>
            </div>

            <div className={styles.rightdiv}>
              <p>Read</p>
            </div>
          </div>
          <div className={styles.div1}>
            <div className={styles.leftdiv}>
              <img src={image3} alt="" />
              <div className={styles.middlediv}>
                <p>Feb 16, 2023</p>
                <h3>3 ways to develop your skill</h3>
                <div className={styles.text}>
                  <p>FIGMA</p>
                  <p>WEB</p>
                </div>
              </div>
            </div>

            <div className={styles.rightdiv}>
              <p>Read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section6;
