const Booking = require("../models/Booking");

class BookingService{
  async create(booking){
      await Booking.create(booking);
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