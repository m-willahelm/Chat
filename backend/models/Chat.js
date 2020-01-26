const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    origem: String,
    mensagem: String
})

module.exports = mongoose.model('Chat', ChatSchema );