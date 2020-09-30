const express = require("express");
const CicloPagamentoService = require("../service/ciclo-pagamento-service");
const ResumoFaturamentoService = require("../service/resumo-faturamento-service");
const router = express.Router();

module.exports = function(server) {
    server.use("/api", router);
    CicloPagamentoService.register(router, "/ciclo-pagamento");
    router.route("/resumo-faturamento").get(ResumoFaturamentoService.recuperarResumoFaturamento);
};