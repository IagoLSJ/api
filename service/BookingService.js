const { then } = require("../database/mongo");
const Booking = require("../models/Booking");

class BookingService{
  async create(booking, ClientModel, EmployeeModel, ServiceModel){
    

      const idCliente = await ClientModel.find({cpf:booking.cpfCliente})
      const idFuncionario = await EmployeeModel.find({cpf:booking.cpfFuncionario})
      const nomeServico = await ServiceModel.find({name:booking.nomeServico})

    

      console.log(idCliente)
      console.log(idFuncionario)
      console.log(nomeServico)
      
      const newBooking = { funcionarioId: idFuncionario["_id"], clienteId: idCliente["_id"], 
        servicoId: nomeServico["name"], horario:booking.horario, data:booking.data}

      console.log(newBooking)

      await Booking.create(newBooking)

      return booking;
  }

  async list(requestQuery){
    const booking = await Booking.find(requestQuery);
    return booking;
  }

  async edit(queryId, booking){
    const updateBooking = await Booking.updateOne(queryId, booking);
    return updateBooking;
  }

  async delete(bookingeId){
    await Booking.deleteOne({_id:bookingeId});
  }

  async isavailabilityHour(employeeId, hour, date){
    const result = await Booking.find({_id:employeeId, horario:hour, data:date})
    return result;
  }

  async bookingsOfDay(employeeId, date){
    const result = await Booking.find({_id:employeeId, data:date})
    return result;
  }
}
module.exports = BookingService;