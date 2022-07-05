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

  async edit(employee, employeeId){
    const updateEmployee = await Employee.updateOne({ _id: employeeId }, employee);
    return updateEmployee;
  }

  async delete(employeeId){
    await Employee.deleteOne({_id:employeeId});
  } 
}

module.exports = EmployeeService;