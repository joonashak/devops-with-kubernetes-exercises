import React from "react";
import { Card, CardHeader, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    maxWidth: "30vw",
  },
  card: {
    width: "fit-content",
    margin: "2rem auto",
  },
});

export default () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title="Image of the Day" />
      <img
        src={`${process.env.REACT_APP_BACKEND_URL}/daily`}
        className={classes.image}
      />
    </Card>
  );
};
