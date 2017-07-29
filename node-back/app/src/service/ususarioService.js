'use-restrict'
let usuarioDao = require('./../dao/usuarioDaoImpl');

function Service() {
    this.consultarTodosUsuarios = consultarTodosUsuarios;
    this.consultarUsuarioPorId = consultarUsuarioPorId;
    this.inserirUsuario = inserirUsuario;
    this.autenticarUsuario = autenticarUsuario;
}

function consultarTodosUsuarios() {
    return new Promise(function (resolve, reject) {
        usuarioDao.consultarTodosUsuarios().then(function (result) {
            resolve(result);
        });
    });
}


function consultarUsuarioPorId(id) {
    return new Promise(function (resolve, reject) {
        usuarioDao.consultarUsuarioById(id).then(function (result) {
            resolve(result);
        });
    });
}

function autenticarUsuario(email, senha) {
    return new Promise(function (resolve, reject) {
        usuarioDao.autenticarUsuario(email, senha).then(function (result) {
            resolve(result);
        });
    });
}

function inserirUsuario(usuario) {
    return new Promise(function (resolve, reject) {
        usuarioDao.inserirUsuario(usuario).then(function (result) {
            resolve(result);
        });
    });
}


module.exports = new Service();