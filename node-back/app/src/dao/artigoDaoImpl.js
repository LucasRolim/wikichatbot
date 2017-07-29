'use-restrict'
let mongoose = require('mongoose');
let mongooseUtil = require('./../util/mongooseUtil');
let artigoSchema = require('./../schema/artigoSchema'); 
let artigoModel = mongoose.model('artigo', artigoSchema);

function Dao(){
    this.consultarTodosArtigos = findAllArtigos; 
    this.consultarArtigosById = findAllArtigosById
    this.inserirArtigo = insertNewArtigo;
}


function findAllArtigos(){
    return new Promise(function(resolve, reject){
        artigoModel.find().then(function(result){
            resolve(result);
        });
    });
}

function findAllArtigosById(id){
    return new Promise(function(resolve, reject){
        artigoModel.findOne({_id : id}).then(function(result){
            resolve(result);
        });
    });
}

function insertNewArtigo(artigo){ 
    return new Promise(function(resolve, reject){
        artigoModel.create(artigo).then(function(result){
            resolve(result);
        });
    });
}

module.exports = new Dao();