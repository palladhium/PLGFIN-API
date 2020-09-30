const cicloPagamentoModel = require("../model/ciclo-pagamento-model");
const CicloPagamentoModel = require("../model/ciclo-pagamento-model");

CicloPagamentoModel.methods(["get", "post", "put", "delete"]);

CicloPagamentoModel.updateOptions({ new: true, runValidators: true });

CicloPagamentoModel.route("contador", function(request, response, next) {
    CicloPagamentoModel.count(function(error, result) {
        if(error) {
            console.log([error]);
            response.status(500).json({errorResponse: [error]});
        } else {
            response.json({ result })
        }
    });
});

module.exports = CicloPagamentoModel;