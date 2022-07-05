const db = require("../database/mongo")
const Booking = require("../models/Booking");

class BookingService{
  create(booking){  
    return Booking.create(booking)
  }

  async list(requestQuery){
    const booking = await Booking.find(requestQuery);
    return booking;
  }

  async edit(queryId, booking){
    const updateBooking = await Booking.updateOne(queryId, booking);
    return updateBooking;
  }

  async delete(queryId){
    await Booking.deleteOne(queryId);
  }

  async isAvailabilityHour(queryId){
    const result = await Booking.find(queryId)
    return result;
  }

  async bookingsOfDay(queryId){
    const result = await Booking.find(queryId)
    return result;
  }
}
module.exports = BookingService;