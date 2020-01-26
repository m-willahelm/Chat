const {Router} = require('express');
const routes = Router();

const ChatController = require('./controllers/ChatController');

routes.post('/chat', ChatController.store);

module.exports = routes;