const mongoose = require('mongoose');

const PapeadorSchema = mongoose.Schema({
    nome: String,
    email: String
})

module.exports = mongoose.model('Papeador', PapeadorSchema)