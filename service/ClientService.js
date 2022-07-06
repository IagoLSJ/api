const Client = require("../models/Client");

class ClientService{
  
  async create(client){
    await Client.create(client);
    return client;
  }

  async list(queryId){
    const client = await Client.find(queryId);
    return client;
  }

  async edit(queryId, client){
    const updateClient = await Client.updateOne(queryId, client);
    return updateClient;
  }

  async delete(queryId){
    await Client.deleteOne(queryId);
  }
}

module.exports = ClientService;