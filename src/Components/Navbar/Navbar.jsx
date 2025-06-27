import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../Assets/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.MainSection}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`${styles.links} ${isMenuOpen ? styles.show : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      <button>HIRE ME</button>
    </div>
  );
};

export default Navbar;
