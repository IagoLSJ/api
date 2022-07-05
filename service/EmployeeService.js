const Employee = require("../models/Employee");

class EmployeeService{
  
  async create(employee){
    await Employee.create(employee);
    return employee;
  }

  async list(){
    const employee = await Employee.find();
    return employee;
  }

  async listById(EmployeeId){
    const employee = await Employee.findOne({ _id: EmployeeId });
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