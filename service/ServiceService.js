const Service = require("../models/Service");

class serviceService{
  
  async create(service){
    await Service.create(service);
    return service;
  }

  async list(){
    const service = await Service.find();
    return service;
  }

  async listById(serviceId){
    const service = await Service.findOne({ _id: serviceId });
    return service;
  }

  async edit(service, serviceId){
    const updateService = await Service.updateOne({ _id: serviceId }, service);
    return updateService;
  }

  async delete(serviceId){
    await Service.deleteOne({_id:serviceId});
  }
}

module.exports = serviceService;