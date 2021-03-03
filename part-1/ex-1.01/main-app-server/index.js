const axios = require("axios");
const express = require("express");
const fs = require("fs");
const { generate } = require("randomstring");

const s = generate();

const server = express();
server.get("*", async (req, res) => {
  const timestamp = fs.readFileSync("/app/files/timestamp");
  const result = await axios.get("http://ping-pong-svc:2345/n");
  res.send(`${process.env.MESSAGE}<br />${timestamp} ${s}<br />Ping / Pongs: ${result.data}`);
});

server.listen(3000);
