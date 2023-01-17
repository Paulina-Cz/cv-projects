import React from "react";
import Card from "../UI/Card";
import styles from "./ListOfUsers.module.css";

const ListOfUsers = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email} {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ListOfUsers;