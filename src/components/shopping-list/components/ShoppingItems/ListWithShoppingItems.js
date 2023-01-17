import React from "react";
import ShoppingItem from "./ShoppingItem";
import styles from "./ListWithShoppingItems.module.css";


const ListWithShoppingItems = (props) => {
  return (
      <ul className={styles.shoppinglist}>
        {props.items.map((newitem) => (
          <ShoppingItem
            key={newitem.id}
            id={newitem.id}
            onDelete={() => props.onDeleteShoppingItem(newitem.id)}
          >
            {newitem.text}
          </ShoppingItem>
        ))}
      </ul>
  );
};

export default ListWithShoppingItems;