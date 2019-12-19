const Sequelize = require("sequelize");

const Connection = require("../DB/DB"); //db connection

const tableName = "role"; //tablename

const Role = Connection.define(tableName, {
  role: Sequelize.STRING
});

module.exports = Role;
