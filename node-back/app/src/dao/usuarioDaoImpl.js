'use-restrict'
let mongoose = require('mongoose');
let mongooseUtil = require('./../util/mongooseUtil');
let usuarioSchema = require('./../schema/usuarioSchema'); 
let usuarioModel = mongoose.model('usuario', usuarioSchema);

function Dao(){
    this.consultarTodosUsuarios = findAllUsuario; 
    this.consultarUsuarioById = findUserById;
    this.inserirUsuario = insertNewUser;
    this.autenticarUsuario = authenticateUser;
}


function findAllUsuario(){
    return new Promise(function(resolve, reject){
        usuarioModel.find().then(function(result){
            resolve(result);
        });
    });
}

function insertNewUser(usuario){ 
    return new Promise(function(resolve, reject){
        usuarioModel.create(usuario).then(function(result){
            resolve(result);
        });
    });
}

function findUserById(id){ 
    return new Promise(function(resolve, reject){
        usuarioModel.findOne({_id : id}).then(function(result){
            resolve(result);
        });
    });
}

function authenticateUser(email, senha){ 
    console.log(email, senha);
    return new Promise(function(resolve, reject){
        usuarioModel.findOne({email : email, senha : senha}).then(function(result){
            resolve(result);
        });
    });
}

module.exports = new Dao();