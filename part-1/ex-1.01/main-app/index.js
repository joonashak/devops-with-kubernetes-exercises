const express = require("express");
const { generate } = require("randomstring");

const s = generate();

setInterval(() => console.log(`${new Date()} ${s}`), 5000);

const server = express();
server.get("*", (req, res) => res.send(`${new Date()} ${s}`));

server.listen(3000);
