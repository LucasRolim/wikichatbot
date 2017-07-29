let UsuarioRouter = require('./app/src/router/usuarioRouter');
let ArtigoRouter = require('./app/src/router/artigoRouter');
let mongooseUtil = require('./app/src/util/mongooseUtil');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


var allowCors = function (req, res, next) { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');    
    next();
} 
app.use(allowCors);


app.use('/user', UsuarioRouter);
app.use('/artigo', ArtigoRouter);


app.listen(3200, function(){  
    mongooseUtil.abrirConexao();
    console.log("Aplicatio Run...");
})