import React from "react";
import styles from "./Work.module.css";
import star from "../../Assets/Star_sec2.png";
import img1 from "../../Assets/image1.png";
import img2 from "../../Assets/image2.png";
import img3 from "../../Assets/image3.png";

const Section3 = () => {
  return (
    <div className={styles.maincontainer3}>
      <div className={styles.middlecontainer}>
        <div className={styles.topcontainer3}>
          <div>
            <h3>
              {" "}
              <img src={star} alt="" />
              Works
            </h3>
          </div>
          <div className={styles.para}>
            <p>view all</p>
          </div>
        </div>

        <div className={styles.bottomcontainer3}>
          <div className={styles.div1}>
            <div className={styles.leftdiv}>
              <img src={img1} alt="" />
            </div>
            <div className={styles.rightdiv}>
              <div className={styles.topdiv}>
                <h3>Anlysis Application</h3>
                <p>
                  With user-centered approach, the goals was to create an
                  intuitive interface for enhanced financial intelligence.
                </p>
                <div className={styles.para2}>
                  <p>FIGMA</p>
                  <p>UX</p>
                </div>
              </div>
              <div className={styles.bottomdiv}>
                <p>View Case Study</p>
              </div>
            </div>
          </div>

          <div className={styles.div1}>
            <div className={styles.leftdiv}>
              <img src={img2} alt="" />
            </div>
            <div className={styles.rightdiv}>
              <div className={styles.topdiv}>
                <h3>Fortknox Application</h3>
                <p>
                  With user-centered approach, the goals was to create an
                  intuitive interface for enhanced financial intelligence.
                </p>
                <div className={styles.para2}>
                  <p>MOBILE</p>
                  <p>WEB</p>
                </div>
              </div>
              <div className={styles.bottomdiv}>
                <p>View Case Study</p>
              </div>
            </div>
          </div>

          <div className={styles.div1}>
            <div className={styles.leftdiv}>
              <img src={img3} alt="" />
            </div>
            <div className={styles.rightdiv}>
              <div className={styles.topdiv}>
                <h3>Zenocide Application</h3>
                <p>
                  With user-centered approach, the goals was to create an
                  intuitive interface for enhanced financial intelligence.
                </p>
                <div className={styles.para2}>
                  <p>APP</p>
                  <p>WEB</p>
                </div>
              </div>
              <div className={styles.bottomdiv}>
                <p>View Case Study</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
