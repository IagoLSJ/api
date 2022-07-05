const Service = require("../models/Service");

class serviceService{
  
  async create(service){
    await Service.create(service);
    return service;
  }

  async list(requestQuery){
    const service = await Service.find(requestQuery);
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