const express = require("express");
const { Client } = require("pg");

const db = new Client();
db.connect()
  .then(() => console.log("connected"))
  .catch((e) => console.log("not connected", e));

let x = 0;

const server = express();
console.log(Object.keys(process.env));

server.get("/n", (req, res) => res.send(`${x}`));

server.get("*", (req, res) => {
  x++;
  res.send(`${x}`);
});

server.listen(3000);

//await db.end();
