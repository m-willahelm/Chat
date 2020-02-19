var express = require('express');
const app = express();
var server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('../routes');

mongoose.connect('mongodb+srv://guiMachado:password007@cluster0-xjbsa.mongodb.net/chatRoom?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.use(cors());
app.use(express.json());
app.use(routes);
io.on('connection', socket=>{
    console.log('Socket conectado');
    socket.on('sendMessage', data=>{
        console.log(data);
        socket.broadcast.emit('broadcast', data)
    })
})
server.listen(3333);


