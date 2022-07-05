const BookingService = require("../service/BookingService");
bookingService = new BookingService();

const list = async (req, res) => {
    try {
        const booking = await bookingService.list();
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

const create = async (req, res) => {
    const {nome, preco, funcionario, cliente, servico, horario, data} = req.body
    
    const booking = {nome, preco, funcionario, cliente, servico, horario, data}
    try {
        const response = await bookingService.create(booking);
        res.status(201).json({ Menssage: "Cadastrado realizado com sucesso",response });
      } catch (error) {
        console.log(error);
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

const servicesDay = async(req,res) =>{
  let {id,hour, date} = req.params;
  booking = new BookingsService();
  date = date.replace('_', '/')
  console.log(date);
  const result = booking.bookingsOfDay(id,date);
  res.json({result})
}
module.exports = {
    list,
    listById,
    create,
    edit,
    deleteById,
    servicesDay
}