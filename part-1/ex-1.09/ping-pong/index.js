const express = require("express");

let x = 0;

const server = express();

server.get("*", (req, res) => {
  x++;
  console.log('moi', x);
  res.send(`${x}`);
});

server.listen(3000);
