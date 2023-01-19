import React, { useState } from "react";
import AddNewUser from "./components/Users/AddNewUser";
import ListOfUsers from "./components/Users/ListOfUsers";
import ErrorOverlay from "./components/UI/ErrorOverlay";
import styles from "./FormWithOverlay.module.css";

const FormWithOverlay = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [error, setError] = useState();

  const addNewUserHandler = (userName, userEmail, userAge) => {
    setListOfUsers((prevListOfUsers) => {
      return [
        ...prevListOfUsers,
        {
          name: userName,
          email: userEmail,
          age: userAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div className={styles.formWithOverlayLayout}> 
      {error && (
        <ErrorOverlay
          title={error.title}
          message={error.message}
          onHandleError={() => setError(null)}
        />
      )}
      <AddNewUser onAddNewUser={addNewUserHandler} setErrorHandler={setError}/>
      {<ListOfUsers users={listOfUsers} />}
      </div>
  );
};

export default FormWithOverlay;
