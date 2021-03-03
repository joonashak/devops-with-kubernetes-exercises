import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import axios from "axios";

export default () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo`
      );
      setTodos(data);
    })();
  }, []);

  return (
    <List>
      <ListItem>
        <ListItemText>Todo 1</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Todo 2</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Todo 3</ListItemText>
      </ListItem>
    </List>
  );
};
