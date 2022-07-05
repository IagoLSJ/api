const Client = require("../models/Client");

class ClientService{
  
  async create(client){
    await Client.create(client);
    return client;
  }

  async list(requestQuery){
    const client = await Client.find(requestQuery);
    return client;
  }

  async edit(client, queryId){
    const updateClient = await Client.updateOne(queryId, client);
    return updateClient;
  }

  async delete(clienteId){
    await Client.deleteOne({_id:clienteId});
  }
}

module.exports = ClientService;