const Booking = require("../models/Booking");

class BookingService{
  
  async create(booking){
    await Booking.create(booking);
    return booking;
  }

  async list(){
    const booking = await Booking.find();
    return booking;
  }

  async listById(bookingId){
    const booking = await Booking.findOne({ _id: bookingId });
    return booking;
  }

  async edit(booking, bookingId){
    const updateBooking = await Booking.updateOne({ _id: bookingId }, booking);
    return updateBooking;
  }

  async delete(bookingeId){
    await Booking.deleteOne({_id:bookingeId});
  }
}

module.exports = BookingService;