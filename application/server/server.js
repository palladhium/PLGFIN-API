const bodyParser = require("body-parser");
const express = require("express");
const corsConfiguration = require("../configuration/cors-configuration");
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(corsConfiguration);

const portaServidor = 9090;

server.listen(portaServidor, function() {
    console.log(`Servidor executando na porta: ${portaServidor}`);
});

// server.use(function(request, response, next) {
//     response.send(`Executando...`);
// });

module.exports = server;