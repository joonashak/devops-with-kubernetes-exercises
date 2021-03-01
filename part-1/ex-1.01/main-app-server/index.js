const express = require("express");
const fs = require("fs");
const { generate } = require("randomstring");

const s = generate();

const server = express();
server.get("*", (req, res) => {
  const timestamp = fs.readFileSync("/app/files/timestamp");
  const pingpongs = fs.readFileSync("/app/pv/pingpongs");
  res.send(`${timestamp} ${s}<br />Ping / Pongs: ${pingpongs}`);
});

server.listen(3000);
