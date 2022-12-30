const { listen } = require("express/lib/application")

const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket)=>{

    socket.on('chat', (msg)=>{
        io.emit('chat', msg)
    })
})

app.get('/', (req,res)=>{
    
    res.sendfile(`${__dirname}/cliente/index.html`)
})

server.listen(3000, ()=> {
    console.log('Servidor corriendo en el puerto 3000')
})
