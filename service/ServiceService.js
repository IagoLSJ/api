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

  async edit(queryId, service){
    const updateService = await Service.updateOne(queryId, service);
    return updateService;
  }

  async delete(queryId){
    await Service.deleteOne(queryId);
  }
}

module.exports = serviceService;