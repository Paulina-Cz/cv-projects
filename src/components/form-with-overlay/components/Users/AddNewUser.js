import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddNewUser.module.css";
import Button from "../UI/Button";
import RegexInput from "./RegexInput";

const AddNewUser = (props) => {
  const { setErrorHandler } = props;
  const [enteredUsername, setEnteredUsername] = useState(initUsernameState);
  const [enteredEmail, setEnteredEmail] = useState(initEmailState);
  const [enteredAge, setEnteredAge] = useState(initAgeState);

  const addNewUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.value.trim().length === 0 ||
      enteredEmail.value.trim().length === 0 ||
      enteredAge.value.trim().length === 0
    ) {
      setErrorHandler({
        title: "Invalid input",
        message: "Please enter a valid name, e-mail and age.",
      });
      return;
    }

    if (!validateEmail(enteredEmail.value)) {
      setErrorHandler({
        title: "Invalid e-mail",
        message: "Please enter a valid e-mail.",
      });
      return;
    }

    if (!validateAge(enteredAge.value)) {
      setErrorHandler({
        title: "Invalid age",
        message: "Please enter a valid age.",
      });
      return;
    }

    props.onAddNewUser(
      enteredUsername.value,
      enteredEmail.value,
      enteredAge.value
    );
    setEnteredUsername(initUsernameState);
    setEnteredEmail(initEmailState);
    setEnteredAge(initAgeState);
  };

  const usernameChangeHandler = (event) => {
    const newUsernameValue = event.target.value;
    const validUsername = validateUsername(newUsernameValue);
    const usernameErrorMessage = validUsername ? null : USERNAME_ERROR_MESSAGE;
    setEnteredUsername((prevState) => {
      return {
        value: newUsernameValue,
        valid: validUsername,
        errorMessage: usernameErrorMessage,
      };
    });
  };

  const emailChangeHandler = (event) => {
    const newEmailValue = event.target.value;
    const validEmail = validateEmail(newEmailValue);
    const emailErrorMessage = validEmail ? null : EMAIL_ERROR_MESSAGE;
    setEnteredEmail((prevState) => {
      return {
        value: newEmailValue,
        valid: validEmail,
        errorMessage: emailErrorMessage,
      };
    });
  };

  const ageChangeHandler = (event) => {
    const newAgeValue = event.target.value;
    const validAge = validateAge(newAgeValue);
    const ageErrorMessage = validAge ? null : AGE_ERROR_MESSAGE;
    setEnteredAge((prevState) => {
      return {
        value: newAgeValue,
        valid: validAge,
        errorMessage: ageErrorMessage,
      };
    });
  };

  return (
    <Card className={styles.input}>
      <form className={styles.form} onSubmit={addNewUserHandler}>
        <p className={styles.entryMessage}>Sign Up Form</p>
        <RegexInput
          labelName={"Username:"}
          inputId={"username"}
          inputType={"text"}
          inputValue={enteredUsername.value}
          inputOnChange={usernameChangeHandler}
          errorMessage={enteredUsername.errorMessage}
        />
        <RegexInput
          labelName={"E-Mail:"}
          inputId={"e-mail"}
          inputType={"email"}
          inputValue={enteredEmail.value}
          inputOnChange={emailChangeHandler}
          errorMessage={enteredEmail.errorMessage}
        />
        <RegexInput
          labelName={"Age:"}
          inputId={"age"}
          inputType={"number"}
          inputValue={enteredAge.value}
          inputOnChange={ageChangeHandler}
          errorMessage={enteredAge.errorMessage}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

const initUsernameState = {
  value: "",
  valid: false,
  errorMessage: null,
};

const USERNAME_ERROR_MESSAGE =
  "Please enter a username with 3 up to 15 characters!";

const validateUsername = (usernameToValidate) => {
  return usernameToValidate.match(/^[A-Za-z._\-0-9]{3,25}$/);
};

const initEmailState = {
  value: "",
  valid: false,
  errorMessage: null,
};

const EMAIL_ERROR_MESSAGE = "Email is not valid!";

const validateEmail = (emailToValidate) => {
  return emailToValidate.match(/^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/);
};

const initAgeState = {
  value: "",
  valid: false,
  errorMessage: null,
};

const AGE_ERROR_MESSAGE = "Age is not valid!";

const validateAge = (ageToValidate) => {
  return ageToValidate.match(/^([0-9]|[1-9][0-9])$/);
};

export default AddNewUser;
