const Chat = require('../models/Chat');

module.exports = {
    store(request, response){
        const {origem, mensagem} = request.body;

        let mensagem = Chat.create({
            origem,
            mensagem
        });
    }
    
}