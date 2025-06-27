import React from "react";
import styles from "./Expertise.module.css";
import star from "../../Assets/Star_sec2.png";
import dot from "../../Assets/dot.png";

const Section2 = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.middlecontainer}>
        <div className={styles.topcontainer}>
          <h3>
            {" "}
            <img src={star} alt="" />
            Expertise
          </h3>
        </div>
        <div className={styles.bottomcontainer}>
          <div className={styles.topdiv}>
            <div className={styles.div1}>
              <h5>
                <img src={dot} alt="" />
                Branding
              </h5>
              <p>
                I create efficient, adaptable, and engaging websites. No
                predefined patterns. No sluggish, complex code. Webflow forms
                the foundation of my web development approach. I employ it to
                provide safe, top-notch bespoke websites.
              </p>
            </div>
            <div className={styles.div1}>
              <h5>
                <img src={dot} alt="" />
                UI Design
              </h5>
              <p>
                I create efficient, adaptable, and engaging websites. No
                predefined patterns. No sluggish, complex code. Webflow forms
                the foundation of my web development approach. I employ it to
                provide safe, top-notch bespoke websites.
              </p>
            </div>
          </div>
          <div className={styles.bottomdiv}>
            <div className={styles.div2}>
              <h5>
                <img src={dot} alt="" />
                UX Design
              </h5>
              <p>
                I comprehend and resolve digital product issues using a
                user-focused methodology. Investigation. compassion, and visual
                conveyance are a few techniques I apply to captivate and involve
                your users while fulfilling your business requirements
              </p>
            </div>
            <div className={styles.div2}>
              <h5>
                <img src={dot} alt="" />
                Development
              </h5>
              <p>
                I create user-friendly, adaptive, engaging websites. No
                cookie-cutters. No cumbersome. complex coding. Webflow forms the
                foundation of my web development approach, I employ it to
                produce safe, top-notch personalized websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
