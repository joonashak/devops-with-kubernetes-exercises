import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormInput = {
  newTodo: string;
};

export default () => {
  const { register, handleSubmit, errors } = useForm();

  console.log(errors);
  const rules = {
    required: "Please enter something.",
    maxLength: {
      value: 140,
      message: "Maximum length is 140 characters.",
    },
  };

  const onSubmit = async (data: FormInput) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/todo`, {
      newTodo: data.newTodo,
    });
  };

  return (
    <form>
      <TextField
        name="newTodo"
        variant="filled"
        label="New Todo"
        inputRef={register(rules)}
        error={Object.keys(errors).includes("newTodo")}
        helperText={errors.newTodo?.message}
      />
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Save
      </Button>
    </form>
  );
};
