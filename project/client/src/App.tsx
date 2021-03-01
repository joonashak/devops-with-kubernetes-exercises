import React from "react";
import Container from "@material-ui/core/Container";
import ImageOfTheDay from "./components/ImageOfTheDay";
import TodoList from "./components/TodoList";

export default () => (
  <Container>
    <ImageOfTheDay />
    TODO: <input maxLength={140} />
    <input type="submit" />
    <TodoList />
  </Container>
);
