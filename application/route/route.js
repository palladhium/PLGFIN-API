const express = require("express");
const CicloPagamentoService = require("../service/ciclo-pagamento-service");
const router = express.Router();

module.exports = function(server) {
    server.use("/api", router);
    CicloPagamentoService.register(router, "/ciclo-pagamento");
};