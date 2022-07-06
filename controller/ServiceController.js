const ServiceService = require("../service/ServiceService");
serviceService = new ServiceService();

const create = async (req, res) => {
  const { name, price, servicesOffered} = req.body;

  const service = {
    name, price, servicesOffered
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
    const services = await serviceService.list(req.query);
    res.status(200).json(services);
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao listar os atendimento" });
  }
};

const edit = async (req, res) => {
  const { name, price, servicesOffered } = req.body;
  const service = {
    name,
    price,
    servicesOffered
  };

  try {
    const updateService = await serviceService.edit(req.query, service);
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

const _delete = async (req, res) => {
  const service = await serviceService.list(req.query);
  if (!service) {
    return res.status(400).json({ Menssage: "Atendimento não encontrado" });
  }
  try {
    await serviceService.delete(req.query);
    res.status(200).json({ Menssage: "Atendimento deletado com sucesso" });
  } catch (erro) {
    res.status(400).json({ Menssage: "Erro ao deletar atendimento" });
  }
};

module.exports  = {
  create,
  list,
  edit,
  _delete
};
