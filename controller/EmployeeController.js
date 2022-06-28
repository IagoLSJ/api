const Employee = require("../models/Employee");

const create = async (req, res) => {
  const { cpf, nome, salario, profissoes } = req.body;
  const employee = {
    cpf,
    nome,
    salario,
    profissoes,
  };

  try {
    await Employee.create(employee);
    res
      .status(201)
      .json({ Menssage: "Funcionario cadastrado com sucesso" });
  } catch (error) {
    res
      .status(400)
      .json({ Menssage: "Erro ao cadastrar um novo funcionario" });
  }
};

const list = async (req, res) => {
  try {
    const peoples = await Employee.find();
    res.status(200).json(peoples);
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao listar os funcionarios" });
  }
};

const listById = async (req, res) => {
  const id = req.params.id;

  try {
    const person = await Employee.findOne({ _id: id });
    res.status(200).json(person);
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao encontrar o funcionario" });
  }
};

const edit = async (req, res) => {
  const id = req.params.id;
  const { cpf, nome, salario, profissoes } = req.body;

  const employee = {
    cpf,
    nome,
    salario,
    profissoes,
  };

  try {
    const updateEmployee = await Employee.updateOne({ _id: id }, employee);
    res
      .status(200)
      .json({
        Menssage: "Dados do funcionario atualizados com sucesso",
        updateEmployee,
      });
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao editar o funcionario" });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;

  const person = await Employee.findOne({ _id: id });

  if (!person) {
    res.send("Usuário não existe");
    return;
  }

  try {
    await Employee.deleteOne({ _id: id });
    res.status(200).json({ Menssage: "Funcionario deletado com sucesso" });
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao deletar o funcionario" });
  }
};
module.exports = {
  create,
  list,
  listById,
  edit,
  deleteById,
};
