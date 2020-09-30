const _ = require('lodash');
const CicloPagamentoModel = require("../model/ciclo-pagamento-model");

function recuperarResumoFaturamento(request, response) {
    CicloPagamentoModel.aggregate([{
    $project: {id_credito: {$sum: "$id_credito.valor"}, id_debito: {$sum: "$id_debito.valor"}}
  }, {
    $group: {_id: null, id_credito: {$sum: "$id_credito"}, id_debito: {$sum: "$id_debito"}}
  }, {
    $project: {_id: 0, id_credito: 1, id_debito: 1}
  }], function(error, result) {
    if(error) {
      response.status(500).json({errors: [error]});
    } else {
      response.json(_.defaults(result[0], {id_credito: 0, id_debito: 0}));
    }
  })
};

module.exports = { recuperarResumoFaturamento };
