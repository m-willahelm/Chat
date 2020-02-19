const Chat = require('../models/Chat');

module.exports = {
    async index(req, res){
        const chats = await Chat.find();
        return res.json(chats);
    },

    store(req, res){
        const chat = {origem, mensagem} = req.body;
        
        Chat.create({
            origem,
            mensagem,
        });
        res.send(chat);
    },
    
}