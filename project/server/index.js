const express = require('express')
const server = express()
const port = 3000

server.get('*', (req, res) => res.send('Hello, world!'))

server.listen(port, () => console.log(`Server started in port ${port}`))
