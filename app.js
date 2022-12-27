const { listen } = require("express/lib/application")

const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket)=>{
    //console.log('Un usuario se ha conectado')
    /* socket.on('chat',(msg)=>{
        console.log('Mensaje: '+msg)
    }) */

    socket.on('chat', (msg)=>{
        io.emit('chat', msg)
    })
})

app.get('/', (req,res)=>{
    //res.send('<h1>Aplicación de Chat en Tiempo Real</h1>')
    //console.log(__dirname)
    res.sendfile(`${__dirname}/cliente/index.html`)
})

server.listen(3000, ()=> {
    console.log('Servidor corriendo en el puerto 3000')
})
