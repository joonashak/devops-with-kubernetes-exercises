const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dailyImage = require("./dailyImage");
const { findAll, create } = require("./todoService");

const server = express();
const port = 3000;

server.use(cors());
server.use(bodyParser.json());

server.use(dailyImage);
server.get("/daily", (req, res) => res.sendFile("/app/assets/daily.jpg"));

server.get("/todo", findAll);
server.post("/todo", create);

server.listen(port, () => console.log(`Server started in port ${port}`));
