const express = require("express");
const fs = require("fs");

let x = 0;

const server = express();

server.get("*", (req, res) => {
  x++;
  fs.writeFileSync("/app/pv/pingpongs", `${x}`);
  res.send(`${x}`);
});

server.listen(3000);
