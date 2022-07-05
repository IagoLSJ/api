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

  async edit(client, clientId){
    const updateClient = await Client.updateOne({ _id: clientId }, client);
    return updateClient;
  }

  async delete(clienteId){
    await Client.deleteOne({_id:clienteId});
  }
}

module.exports = ClientService;