const express = require("express");
const fs = require("fs");
const { generate } = require("randomstring");

const s = generate();

const server = express();
server.get("*", (req, res) =>
  res.send(`${fs.readFileSync("/app/files/timestamp")} ${s}`)
);

server.listen(3000);
