import React from "react";
import Container from "@material-ui/core/Container";
import ImageOfTheDay from "./components/ImageOfTheDay";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { DataProvider } from "./components/useData";

export default () => (
  <DataProvider>
    <Container>
      <ImageOfTheDay />
      <Form />
      <TodoList />
    </Container>
  </DataProvider>
);
