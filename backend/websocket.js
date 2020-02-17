const socketio = require('socket.io');


let io;

exports.setupWebSocket = (server) =>{
    io = socketio(server);

    io.on('connection', socket =>{
        console.log('Socket conectado');
    })
}