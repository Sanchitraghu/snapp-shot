import React from "react";
import styles from "./Button.module.css";

const Button = ({ para, call }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          call(e);
        }}
        className={`${styles.buttonn}`}
      >
        {para}
      </button>
    </div>
  );
};

export default Button;
