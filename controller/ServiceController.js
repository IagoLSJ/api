const ServiceService = require("../service/ServiceService");
serviceService = new ServiceService();

const create = async (req, res) => {
  const { prince, servicesOffered} = req.body;

  const service = {
    prince, servicesOffered
  };
  try {
    const response = await serviceService.create(service);
    res.status(201).json({ Menssage: "Atendimento  cadastrado com sucesso",response });
  } catch (error) {
    res.status(400).json({ Menssage: "Erro ao cadastrar um novo atendimento" });
  }
};
const list = async (req, res) => {
  try {
    const services = await serviceService.list();
    res.status(200).json(services);
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao listar os atendimento" });
  }
};

const listByIdEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const service = await serviceService(id);
    res.status(200).json(service);
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao encontrar o atendimento" });
  }
};

const edit = async (req, res) => {
  const id = req.params.id;
  const { prince, servicesOffered } = req.body;
  const service = {
    prince,
    servicesOffered
  };

  try {
    const updateService = await serviceService.edit(service, id);
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
  const service = await serviceService.listById(id);
  if (!service) {
    return res.status(400).json({ Menssage: "Atendimento não encontrado" });
  }
  try {
    await serviceService.delete(id);
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
  deleteById
};
