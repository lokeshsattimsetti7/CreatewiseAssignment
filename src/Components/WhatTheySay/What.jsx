import React from "react";
import styles from "./What.module.css";
import star from "../../Assets/Star_sec2.png";
import sec from "../../Assets/sec7-img.png";
import music from "../../Assets/Group.png";
import img3 from "../../Assets/arrow.png";

const Section7 = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.middlecontainer}>
        <div className={styles.topcontainer}>
          <h3>
            {" "}
            <img src={star} alt="" />
            What they say
          </h3>
        </div>
        <div className={styles.middlediv}>
          <div className={styles.leftdiv}>
            <div className={styles.leftimage}>
              <img src={sec} alt="" />
            </div>
            <div className={styles.lefttext}>
              <h5>Floyd Miles</h5>
              <p>eBay</p>
            </div>
          </div>
          <div className={styles.rightdiv}>
            <img src={music} alt="" />
            <h4>
              Synergy's resume builder is fantastic. It helped me create a
              professional resume that stood out to employers. Synergy's resume
              builder is fantastic. It helped me create a professional resume
              that stood out to employers.
            </h4>
          </div>
        </div>
        <div className={styles.bottomcontainer}>
          <div className={styles.bottomimage}>
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section7;
