const EmployeeService = require("../service/EmployeeService");
const BookingsService = require("../service/BookingService")
employeeService = new EmployeeService();

const create = async (req, res) => {
  const { cpf, nome, salario, profissoes } = req.body;
  const employee = {
    cpf,
    nome,
    salario,
    profissoes,
  };

  try {
    const response = await employeeService.create(employee);
    res
      .status(201)
      .json({ Menssage: "Funcionario cadastrado com sucesso",response});
  } catch (error) {
    res
      .status(400)
      .json({ Menssage: "Erro ao cadastrar um novo funcionario" });
  }
};

const list = async (req, res) => {
  try {
    const peoples = await employeeService.list();
    res.status(200).json(peoples);
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao listar os funcionarios" });
  }
};

const listById = async (req, res) => {
  const id = req.params.id;

  try {
    const person = await employeeService.listById(id);
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
    const updateEmployee = await employeeService.edit(employee,id);
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

  const person = await employeeService.listById(id);

  if (!person) {
    res.send("Usuário não existe");
    return;
  }

  try {
    await employeeService.delete(id);
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
  deleteById
};
