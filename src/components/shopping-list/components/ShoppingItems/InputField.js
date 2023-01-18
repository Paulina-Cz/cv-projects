import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./InputField.module.css";

const InputField = (props) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const itemInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (input.trim().length === 0) {
      setIsValid(false);
    } else {
      props.onAddShoppingItem(input);
      setInput("");
    }
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <div
          className={`${styles["form-input"]} ${!isValid && styles.invalid}`}
        >
          <p>Shopping List</p>
          <label> Enter a shopping Item:</label>
          <input type="text" value={input} onChange={itemInputChangeHandler} />
        </div>
        <Button type="submit">Add Item</Button>
      </form>
    </Card>
  );
};

export default InputField;
