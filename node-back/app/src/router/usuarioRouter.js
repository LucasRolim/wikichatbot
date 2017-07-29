let express = require('express');
let Router = express.Router();

let usuarioService = require('./../service/ususarioService');
let Usuario = require('./../model/usuario');

Router.post('/insertNewUser', function(request, response){
    usuarioRequest = request.body;
    var usuarioObj = new Usuario();

    usuarioObj.nome = usuarioRequest.nome;
    usuarioObj.email = usuarioRequest.email;
    usuarioObj.senha = usuarioRequest.senha;

    console.log(usuarioObj);
    usuarioService.inserirUsuario(usuarioObj).then(function(result){
        response.json(result);
    });    
})

Router.get('/getAllUsers', function(request, response){
    usuarioService.consultarTodosUsuarios().then(function(result){
        response.json(result);
    });
})

Router.get('/getUserById', function(request, response){
    var idUser = request.query.id;
    usuarioService.consultarUsuarioPorId(idUser).then(function(result){
        response.json(result);
    });
})

Router.get('/authenticateUser', function(request, response){
    
    var emailUser = request.query.email;
    var passwordUser = request.query.senha; 
    usuarioService.autenticarUsuario(emailUser, passwordUser).then(function(result){
        response.json(result);
    });
})

module.exports = Router;