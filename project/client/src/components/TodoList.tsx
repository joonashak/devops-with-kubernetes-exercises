import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import useData from "./useData";

export default () => {
  const { todos } = useData();

  return (
    <List>
      {todos.map((todo: string) => (
        <ListItem key={todo}>
          <ListItemText>{todo}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
