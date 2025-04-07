import React from "react";
import styles from "./TopBar.module.scss";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <a href="tel:0221 16943399" className={styles.link}>
          <FaPhoneAlt className={styles.icon} /> 0221 16943399
        </a>
        <a href="mailto:goldenerkegel@gmail.com" className={styles.link}>
          <FaEnvelope className={styles.icon} /> goldenerkegel@gmail.com
        </a>
      </div>
    </div>
  );
};

export default TopBar;
