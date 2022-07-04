const Client = require("../models/Client");

class ClientService{
  
  async create(client){
    await Client.create(client);
    return client;
  }

}

module.exports = ClientService;