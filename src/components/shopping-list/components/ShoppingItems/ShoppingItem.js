import React from "react";
import styles from "./ShoppingItem.module.css";

const ShoppingItem = (props) => {
  return (
    <li className={styles.shoppingitem} onClick={props.onDelete}>
      {props.children}
    </li>
  );
};

export default ShoppingItem;
