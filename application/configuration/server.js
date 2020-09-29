const bodyParser = require("body-parser");
const express = require("express");
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const portaServidor = 9090;

server.listen(portaServidor, function() {
    console.log(`Servidor executado na porta: ${portaServidor}`);
});

server.use(function(request, response, next) {
    response.send(`Executando...`);
});
