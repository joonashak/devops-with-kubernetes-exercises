const express = require("express");
const dailyImage = require("./dailyImage");

const server = express();
const port = 3000;

server.use(dailyImage);
server.get("/daily", (req, res) => res.sendFile("/app/assets/daily.jpg"));

server.listen(port, () => console.log(`Server started in port ${port}`));
