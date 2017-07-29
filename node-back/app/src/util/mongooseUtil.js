'use-restrict'
let mongoose = require('mongoose');
let uri = "mongodb://localhost:27017/hackathon"

function MongooseUtil(){
    this.abrirConexao = connectDataBase;
}

function connectDataBase(){
    mongoose.connect(uri);
}

function closeConnection(){
    
}

module.exports = new MongooseUtil();