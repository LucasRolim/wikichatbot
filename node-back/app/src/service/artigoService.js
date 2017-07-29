'use-restrict'
let artigoDao = require('./../dao/artigoDaoImpl');

function Service() {
    this.consultarTodosArtigos = consultarTodosArtigos;
    this.inserirArtigo = inserirArtigo;
    this.consultarArtigoPorId = consultarArtigoPorId;
    this.atualizarArtigo = atualizarArtigo;
}

function consultarTodosArtigos() {
    return new Promise(function (resolve, reject) {
        artigoDao.consultarTodosArtigos().then(function (result) {
            resolve(result);
        });
    });
}

function consultarArtigoPorId(id) {
    return new Promise(function (resolve, reject) {
        artigoDao.consultarArtigosById(id).then(function (result) {
            resolve(result);
        });
    });
}

function inserirArtigo(artigo) {
    return new Promise(function (resolve, reject) {
        artigoDao.inserirArtigo(artigo).then(function (result) {
            resolve(result);
        });
    });
}

function atualizarArtigo(artigo) {
    return new Promise(function (resolve, reject) {
        artigoDao.insertNewArtigo(artigo).then(function (result) {
            resolve(result);
        });
    });
}





module.exports = new Service();