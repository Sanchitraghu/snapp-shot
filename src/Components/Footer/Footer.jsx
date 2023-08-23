import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.main}`}>
      <p>© Sanchit Raghuwanshi</p>
      <a href="https://github.com/Sanchitraghu" target="_blank">
        Github
      </a>
    </div>
  );
};

export default Footer;
