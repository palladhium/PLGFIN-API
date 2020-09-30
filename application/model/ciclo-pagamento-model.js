const { Schema } = require("mongoose");
const restfull = require("node-restful");
const mongoose = restfull.mongoose;

const CreditoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, min: 0, required: [true, "Informe o valor do Crédito!"] }
});

const DebitoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, min: 0, required: [true, "Informe o valor do Débito!"] },
    situacao: { type: String, required: false, uppercase: true, enum: ["PAGO", "PENDENTE", "AGENDADO"] }
});

const CicloPagamentoSchema = new Schema({
    nome: { type: String, required: true },
    mes: { type: Number, min: 1, max: 12, required: true },
    ano: { type: Number, min: 1970, max: 2100, required: true },
    id_credito: [CreditoSchema],
    id_debito: [DebitoSchema]
});

module.exports = restfull.model("CicloPagamento", CicloPagamentoSchema);