import React from "react";
import styles from "./Footer.module.css";
import logo1 from "./WEBFLOW.png";
import logo2 from "./footerstar.png";
import logo3 from "./FIGMA.png";
import logo4 from "./DESIGNER.png";
import logo5 from "./DEVELOPER.png";

const Fotter = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainConatiner}>
          <div className={styles.LogoConatiner}>
            <img src={logo1} alt="logos" />
            <img src={logo2} alt="logos" />
            <img src={logo3} alt="logos" />
            <img src={logo2} alt="logos" />
            <img src={logo4} alt="logos" />
            <img src={logo2} alt="logos" />
            <img src={logo5} alt="logos" />
          </div>
          <div className={styles.MiddleConatiner}>
            <div className={styles.text}>
              <h3>LET’S TALK!</h3>
            </div>
            <div className={styles.textbottom}>
              <p>rehanurraihan@gmail.com</p>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16699 4.6665H11.8337M11.8337 4.6665V15.3332M11.8337 4.6665L1.16699 15.3332"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <div className={styles.LastConatiner}>
            <div className={styles.lastleft}>© Rehan Raihan - 2023</div>
            <div className={styles.LastRight}>
              <p>Dribbble</p>
              <p>Behance</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Fotter;
