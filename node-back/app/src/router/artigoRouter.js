let express = require('express');
let Router = express.Router();

let artigoService = require('./../service/artigoService');
let Artigo = require('./../model/artigo');
let Usuario = require('./../model/usuario');

Router.post('/insertNewArtigo', function(request, response){
    artigoRequest = request.body;
    console.log(artigoRequest);

    var artigoObj = new Artigo();
    artigoObj.titulo = artigoRequest.titulo;
    artigoObj.conteudo = artigoRequest.conteudo;
    artigoObj.fonte = artigoRequest.fonte;
    artigoObj.versao = artigoRequest.versao;
  
    //Implementar Usuario

    artigoService.inserirArtigo(artigoObj).then(function(result){
        response.json(result);
    });
    
})

Router.get('/getAllArtigos', function(request, response){
    artigoService.consultarTodosArtigos().then(function(result){
        response.json(result);
    });
})

Router.get('/getArtigoById', function(request, response){
    var idUser = request.query.id;
    artigoService.consultarArtigoPorId(idUser).then(function(result){
        response.json(result);
    });
})

Router.post('/updateArtigo', function(request, response){
    artigoRequest = request.body;
    artigoRequest.__v += 1;
    console.log(artigoRequest);
    artigoService.inserirArtigo(artigoRequest).then(function(result){
        response.json(result);
    });    
})


module.exports = Router;