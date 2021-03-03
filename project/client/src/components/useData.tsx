import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

type State = {
  todos: string[];
};

const defaultState: State = {
  todos: [],
};

const DataContext = createContext([[], () => {}]);

export const DataProvider = ({ children }: any) => {
  const [state, setState] = useState<any>(defaultState);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${baseUrl}/todo`);
      setState({ todos: data });
    })();
  }, []);

  return (
    <DataContext.Provider value={[state, setState]}>
      {children}
    </DataContext.Provider>
  );
};

export default () => {
  const [state, setState] = useContext<any>(DataContext);

  const { todos } = state;

  const createTodo = async (newTodo: string) => {
    await axios.post(`${baseUrl}/todo`, { newTodo });
    setState(({ todos, ...rest }: State) => ({
      ...rest,
      todos: todos.concat(newTodo),
    }));
  };

  return {
    todos,
    createTodo,
  };
};
