const path = require('path')
const http = require('http')
const express = require('express')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', () => {
  console.log('New websocket connection')
})

server.listen(port, () => {
  console.log(`listening to port ${port}`)
})

