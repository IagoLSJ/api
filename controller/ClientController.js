const ClientService = require("../service/ClientService");
clientService = new ClientService();

const create = async (req, res) => {
  let { nome, cpf, telefone, email} = req.body;
  cpf = parseInt(cpf)
  const client = {
    nome,
    cpf,
    telefone,
    email,
  };
  console.log(client)
  try {
    const response = await clientService.create(client); 
    res.status(201).json({ Menssage: "Cliente cadastrado com sucesso", response});
  } catch (error) {
    res.status(400).json({ Menssage: "Erro ao cadastrar um novo cliente" });
  }
};

const list = async (req, res) => {
  try {
    const clients = await clientService.list(req.query);
    res.status(200).json(clients);
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao listar os clientes" });
  }
};

const edit = async (req, res) => {
  const { nome, cpf, telefone, email } = req.body;

  //email = undefined ? "" : email;
  const client = {
    nome,
    cpf,
    telefone,
    email,
  };

  try {
    const updateClient = await clientService.edit(req.query, client);
    res
      .status(200)
      .json({
        Menssage: "Dados do cliente atualizados com sucesso",
        updateClient,
      });
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao editar o cliente" });
  }
};

const _delete = async (req, res) => {
  try {
    await clientService.delete(req.query);
    res.status(200).json({ Menssage: "Cliente deletado com sucesso" });
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao deletar o cliente" });
  }
};



module.exports  = {
  create,
  list,
  edit,
  _delete
};
