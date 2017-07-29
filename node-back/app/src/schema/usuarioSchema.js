'use-restrict'
let mongoose = require('mongoose');
var Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    email : String,
    nome : String,
    senha: String
});

module.exports = usuarioSchema;