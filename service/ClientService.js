const Client = require("../models/Client");

class ClientService{
  
  async create(client){
    await Client.create(client);
    return client;
  }

  async list(){
    const client = await Client.find();
    return client;
  }

  async listById(clientId){
    const client = await Client.findOne({ _id: clientId });
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