const express = require("express");

let x = 0;

const server = express();

server.get('/n', (req, res) => res.send(`${x}`))

server.get("*", (req, res) => {
  x++;
  res.send(`${x}`);
});

server.listen(3000);
