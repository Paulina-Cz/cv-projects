import React from "react";

import styles from "../UI/Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.button} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
