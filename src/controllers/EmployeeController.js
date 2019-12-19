const controller = {};
//import db Connection
const Connection = require("../DB/DB");
//import model
const Employee = require("../model/Employee");
const Role = require("../model/Role");

controller.getEmployee = async (req, res) => {
  const response = await Connection.sync()
    .then(function() {
      const data = Employee.findAll();
      return data;
    })
    .catch(err => {
      return err;
    });
  res.json(response);
};

controller.saveEmployee = (req, res) => {
  const data = {
    name: "Sasee",
    age: 25,
    city: "jaffna"
  };
  res.json(data);
};
module.exports = controller;
