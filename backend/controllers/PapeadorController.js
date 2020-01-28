const Papeador = require('../models/Papeador');

module.exports = {
    async index(req, res){
        const papeadores = await Papeador.find();
        return res.json(papeadores);
    },
   store(req, res){
        const papeador = {nome, email} = req.body;

        Papeador.create({
            nome,
            email
        });

        return res.send(papeador);
    }
}