const {Router} = require('express');
const routes = Router();

const ChatController = require('./controllers/ChatController');

routes.post('/chat', ChatController.store);
routes.get('/chat', ChatController.index);

module.exports = routes;