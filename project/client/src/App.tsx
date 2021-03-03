import React from "react";
import Container from "@material-ui/core/Container";
import ImageOfTheDay from "./components/ImageOfTheDay";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

export default () => (
  <Container>
    <ImageOfTheDay />
    <Form />
    TODO: <input maxLength={140} />
    <input type="submit" />
    <TodoList />
  </Container>
);
