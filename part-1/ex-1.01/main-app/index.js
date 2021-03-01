const fs = require("fs");

setInterval(() => {
  fs.writeFileSync("/app/files/timestamp", new Date().toISOString());
}, 5000);
