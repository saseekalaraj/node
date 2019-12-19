const Sequelize = require("sequelize");

const Connection = require("../DB/DB"); //db connection

const tableName = "employee"; //table name

const Role = require("./Role");

const Employee = Connection.define(tableName, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING,
  //foriegen key
  roleId: {
    type: Sequelize.INTEGER,
    //this is reference to another model
    refences: {
        model:Role,
        key:'id'
    }
  }
});

Employee.belongsTo(Role)

module.exports=Employee