const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/movies')
const moviesRouters = require('./routes/movies') // [router]

// Create server
const server = express()

server.use(bodyParser.json())

// Add routes
server.use(moviesRouters) // array of routers

// Start server on localhost:8000
const port = 8000
server.listen(port, () => {
  console.log(`Start on localhost:${port}`)
})
