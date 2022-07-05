const BookingService = require("../service/BookingService");
bookingService = new BookingService();

const list = async (req, res) => {
    try {
        const booking = await bookingService.list(req.query);
        res.status(200).json(booking);
      } catch (erro) {
        res.status(400).json({ Menssage: "Erro ao listar os bookings" });
      }
}

const create = async (req, res) => {
    const booking = {funcionarioId, clienteId, servicoId, horario, data} = req.body  
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
    try {
        const updateBooking = await bookingService.edit(req.query, booking);
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

const _delete = async (req, res) => {

    try {
      await bookingService.delete(req.query);
      res.status(200).json({ Menssage: "Booking deletado com sucesso" });
    } catch (erro) {
      res.status(400).json({ Menssage: "Erro" });
    }
}

const servicesDay = async(req,res) =>{
  let {id, hour, date} = req.params;
  booking = new BookingsService();
  date = date.replace('_', '/')
  console.log(date);
  const result = booking.bookingsOfDay(id,date);
  res.json({result})
}

const isAvailabilityHour = async (req, res) => {
  console.log(req.query)
  try{
    const aux = await bookingService.list(req.query)
    console.log(aux.length)
    if(aux.length==0){
      res.send("Horário e data disponíveis para reserva")
      return
    }
    res.send("Horário e data já resevados")
  }catch(error){
    res.send(error)
  }
} 

const bookingsOfDay = async (req, res) => {
  try{
    const aux = await bookingService.bookingsOfDay(req.query)
    console.log(aux.length)
    if(aux.length!=0){
      res.send(aux)
      return
    }
    res.send("Não há reservas nesta data")
  }catch(error){
    res.send(error)
  }
}

module.exports = {
    list,
    create,
    edit,
    _delete,
    servicesDay,
    isAvailabilityHour,
    bookingsOfDay
}