const Service = require("../models/Service");

const create = async (req, res) => {
  let { client, employee, hourly , day} = req.body;
  const service = {
    client, employee, hourly , day
  };
  try {
    await Service.create(service);
    res.status(201).json({ Menssage: "Aatendimento  cadastrado com sucesso",service });
  } catch (error) {
    res.status(400).json({ Menssage: "Erro ao cadastrar um novo atendimento" });
  }
};
const list = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao listar os atendimento" });
  }
};

const listByIdEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const service = await Service.findOne({ employee: id });
    res.status(200).json(service);
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao encontrar o atendimento" });
  }
};

const edit = async (req, res) => {
  const id = req.params.id;
  const { nome, cpf, telefone } = req.body;
  const email = req.body;
  email = undefined ? "" : email;
  const service = {
    nome,
    cpf,
    telefone,
    email,
  };

  try {
    const updateService = await Service.updateOne({ _id: id }, service);
    res
      .status(200)
      .json({
        Menssage: "Dados do atendimento atualizados com sucesso",
        updateService,
      });
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao editar o atendimento" });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  const service = await Service.findOne({ _id: id });
  if (!service) {
    return res.status(400).json({ Menssage: "Atendimento não encontrado" });
  }
  try {
    await Service.deleteOne({ _id: id });
    res.status(200).json({ Menssage: "Atendimento deletado com sucesso" });
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao deletar atendimento" });
  }
};

module.exports  = {
  create,
  list,
  listByIdEmployee,
  edit,
  deleteById,
};
