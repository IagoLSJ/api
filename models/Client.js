const mongoose = require("mongoose")

const client = mongoose.model("Client",{
  nome : String,
  cpf : Number,
  telefone:String,
  email:String,
})

module.exports = client

// - os requisitos falam sobre haver uma lista de procedimentos com preços, e isso não está no BD (faltou uma entidade para armazenar os procedimentos, com descrição e preço).
// - nome da entidade "Horario" muito ruim, deveria ser "Atendimento".
// - a entidade Atendimento deve servir como a transação exigida, e ter controle de status (criada, confirmada, cancelada, finalizada).
// - para que serve uma lista de "profissoes" no cadastro de Funcionario? Nem está nos requisitos.
// - entidade cliente só tem cpf e nome? Não tem um telefone, email etc para contato? Não pode ser simplista demais.
// - especificação do esquema do BD fora do padrão.
// - endpoints com nomenclatura errada, ver slides.
// Nota: 7,5 (os comentários acima devem ser corrigidos para a entrega 2).