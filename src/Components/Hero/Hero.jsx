import React from "react";
import styles from "./Hero.module.css";
import image1 from "../../Assets/Rectangle2.png";
import image2 from "../../Assets/item3.png";
import item1 from "../../Assets/doradesign.png";
import item2 from "../../Assets/wavefun.png";
import item3 from "../../Assets/Frame.png";

const Section1 = () => {
  return (
    <div className={styles.Maincontainer1}>
      <div className={styles.middlecontainer}>
        <div className={styles.leftcontainer1}>
          <h1>
            I AM A{" "}
            <span>
              <img src={image1} alt="" />
            </span>{" "}
            FREELANCE DESIGNER
            <span>
              {" "}
              <img src={image2} alt="" />{" "}
            </span>{" "}
            FROM <br></br>SAN FRANCISCO
          </h1>
        </div>
        <div className={styles.rightcontainer1}>
          <div className={styles.image}>
            <ul>
              <li>
                {" "}
                <img src={item1} alt="" />
              </li>
              <li>
                {" "}
                <img src={item2} alt="" />
              </li>
              <li>
                {" "}
                <img src={item3} alt="" />
              </li>
            </ul>
          </div>
          <div className={styles.para}>
            <p>
              Welcome to my portfolio.Here,artistry meets functionality. Dive
              into a curated showcase of distinctive branding and web
              designs,each crafted to captivate and inspire
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
