const Employee = require("../models/Employee");

class EmployeeService{
  
  async create(employee){
    await Employee.create(employee);
    return employee;
  }

  async list(requestQuery){
    const employee = await Employee.find(requestQuery);
    return employee;
  }

  async edit(queryId, employee){
    const updateEmployee = await Employee.updateOne(queryId, employee);
    return updateEmployee;
  }

  async delete(queryId){
    await Employee.deleteOne(queryId);
  } 
}

module.exports = EmployeeService;