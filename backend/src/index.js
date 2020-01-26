var express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Chat = require('../models/Chat');

mongoose.connect('mongodb+srv://guiMachado:password007@cluster0-xjbsa.mongodb.net/chatRoom?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const app = express();
app.use(cors());
app.use(express.json());

app.get('/chat', async(req, res)=>{
    const chats = await Chat.find();

    res.json(chats)
    });
app.post('/chat', (req,res)=>{
    const chat = {origem, mensagem} = req.body;
    Chat.create({
        origem,
        mensagem
    });
    res.json(chat);
})



app.listen(3333)