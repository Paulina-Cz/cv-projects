import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorOverlay.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onHandleError} />
      <Card className={styles.overlay}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.footer}>
          <Button onClick={props.onHandleError}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
