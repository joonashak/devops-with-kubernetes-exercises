const { generate } = require("randomstring");

const s = generate()

setInterval(() => console.log(`${new Date()} ${s}`), 5000)