const BookingService = require("../service/BookingService");
bookingService = new BookingService();

const list = async (req, res) => {
    try {
        const booking = await BookingService.list();
        res.status(200).json(booking);
      } catch (erro) {
        res.status(400).json({ Menssage: "Erro ao listar os bookings" });
      }
}

const listById = async (req, res) => {
    const id = req.params.id;
    try {
      const booking = await bookingService.listById(id);
      res.status(200).json(booking);
    } catch (erro) {
      res.status(400).json({ Menssage: "Erro" });
    }
}

const create = async  (req, res) => {
    const booking = {nome, preco, funcionarioId, clienteId, servicoId} = req.body
    try {
        const response = await BookingService.create(booking);
        res.status(201).json({ Menssage: "Cadastrado realizado com sucesso",response });
      } catch (error) {
        res.status(400).json({ Menssage: "Erro" });
      }
}

const edit = async (req, res) => {
    const booking = {nome, preco, funcionarioId, clienteId, servicoId} = req.body
    const id = req.params.id
    try {
        const updateBooking = await bookingService.edit(booking, id);
        res
          .status(200)
          .json({
            Menssage: "Dados atualizados com sucesso",
            updateBooking,
          });
      } catch (erro) {
        res.status(400).json({ Menssage: "Erro" });
      }
}

const deleteById = async (req, res) => {
    const id = req.params.id;
    
    const booking = await bookingService.listById(id);
    
    if (!booking) {
      return res.status(400).json({ Menssage: "Atendimento não encontrado" });
    }

    try {
      await bookingService.delete(id);
      res.status(200).json({ Menssage: "Booking deletado com sucesso" });
    } catch (erro) {
      res.status(400).json({ Menssage: "Erro" });
    }
}

module.exports = {
    list,
    listById,
    create,
    edit,
    deleteById
}