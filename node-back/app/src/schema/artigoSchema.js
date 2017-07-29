'use-restrict'
let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let usuarioSchema = require('./usuarioSchema')

const artigoSchema = new Schema({
    titulo : String,
    conteudo : String,
    fonte: String,
    versao : Number,
    usuario : usuarioSchema
});

module.exports = artigoSchema;