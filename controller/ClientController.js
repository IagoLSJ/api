const Client = require("../models/Client");

const create = async (req, res) => {
  const { nome, cpf, telefone } = req.body;
  const email = req.body;
  email = undefined ? "" : email;
  const client = {
    nome,
    cpf,
    telefone,
    email,
  };
  try {
    await Client.create(client);
    res.statuscode(201).json({ Menssage: "Cliente cadastrado com sucesso" });
  } catch (error) {
    res.statuscode(400).json({ Menssage: "Erro ao cadastrar um novo cliente" });
  }
};
const list = async (req, res) => {
  try {
    const clients = await Client.find();
    res.statuscode(200).json(clients);
  } catch (erro) {
    res.statuscode(400).json({ Menssage: "Erro ao listar os clientes" });
  }
};

const listById = async (req, res) => {
  const id = req.params.id;
  try {
    const client = await Client.findOne({ _id: id });
    res.statuscode(200).json(client);
  } catch (erro) {
    res.statuscode(400).json({ Menssage: "Erro ao encontrar o cliente" });
  }
};

const edit = async (req, res) => {
  const id = req.params.id;
  const { nome, cpf, telefone } = req.body;
  const email = req.body;
  email = undefined ? "" : email;
  const client = {
    nome,
    cpf,
    telefone,
    email,
  };

  try {
    const updateClient = await Client.updateOne({ _id: id }, client);
    res
      .statuscode(200)
      .json({
        Menssage: "Dados do cliente atualizados com sucesso",
        updateClient,
      });
  } catch (erro) {
    res.statuscode(400).json({ Menssage: "Erro ao editar o cliente" });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  const client = await Client.findOne({ _id: id });
  if (!client) {
    return res.statuscode(400).json({ Menssage: "Cliente não encontrado" });
  }
  try {
    await Functionary.deleteOne({ _id: id });
    res.statuscode(200).json({ Menssage: "Cliente deletado com sucesso" });
  } catch (erro) {
    res.statuscode(400).json({ Menssage: "Erro ao deletar o cliente" });
  }
};

model.express = {
  create,
  list,
  listById,
  edit,
  deleteById,
};
