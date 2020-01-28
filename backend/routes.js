const {Router} = require('express');
const routes = Router();

const ChatController = require('./controllers/ChatController');
const PapeadorController = require('./controllers/PapeadorController');

routes.post('/chat', ChatController.store);
routes.get('/chat', ChatController.index);

routes.post('/papeador', PapeadorController.store);
routes.get('/papeador', PapeadorController.index);
module.exports = routes;