import React, { useState } from "react";
import InputField from "./components/ShoppingItems/InputField";
import ListWithShoppingItems from "./components/ShoppingItems/ListWithShoppingItems";
import styles from "./ShoppingList.module.css";

const ShoppingList = () => {
  const [shoppingItem, setShoppingItem] = useState([
    { text: "Batteries", id: "s1" },
    { text: "Shampoo", id: "s2" },
  ]);

  const addShoppingItemHandler = (enteredItem) => {
    setShoppingItem((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.unshift({ text: enteredItem, id: Math.random().toString() });
      return updatedItems;
    });
  };

  const deleteShoppingItemHandler = (itemId) => {
    setShoppingItem((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      return updatedItems;
    });
  };

  let content = (
    <p className={styles.p}>No shopping item found. Please add one!</p>
  );

  if (shoppingItem.length > 0) {
    content = (
      <ListWithShoppingItems
        items={shoppingItem}
        onDeleteShoppingItem={deleteShoppingItemHandler}
      />
    );
  }

  return (
    <>
      <section className={styles.shoppingFormLayout} id="shopping-form">
        <InputField onAddShoppingItem={addShoppingItemHandler} />
      </section>
      <section id="shopping-list">{content}</section>
    </>
  );
};

export default ShoppingList;
