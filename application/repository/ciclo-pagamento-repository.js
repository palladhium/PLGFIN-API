const nodeRestful = require("node-restful");
const Lodash = require("lodash");
const cicloPagamentoModel = require("../model/ciclo-pagamento-model");
const CicloPagamentoModel = require("../model/ciclo-pagamento-model");

CicloPagamentoModel.methods(["get", "post", "put", "delete"]);

// Tratamento de Erros
CicloPagamentoModel.after("post", sendErrorsOrNext).after("put", sendErrorsOrNext);

function sendErrorsOrNext(request, response, next) {
    const bundle = response.locals.bundle;
    if (bundle.errors) {
        var erros = parseErrors(bundle.errors);
        response.status(500).json({ erros });
    } else {
        next();
    }
};

function parseErrors(nodeRestfulErrors) {
    const errors = [];
    Lodash.forIn(nodeRestfulErrors, error => errors.push(error.message));
    return errors;
};

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