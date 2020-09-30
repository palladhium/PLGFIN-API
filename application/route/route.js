const express = require("express");
const CicloPagamentoService = require("../repository/ciclo-pagamento-repository");
const ResumoFaturamentoService = require("../repository/resumo-faturamento-repository");
const router = express.Router();

module.exports = function(server) {
    server.use("/api", router);
    CicloPagamentoService.register(router, "/ciclo-pagamento");
    router.route("/resumo-faturamento").get(ResumoFaturamentoService.recuperarResumoFaturamento);
};