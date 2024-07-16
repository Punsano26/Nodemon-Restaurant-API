const { DataTypes } = require("sequelize");
const sequelize = require("./db");
//define DB Schema
const Role = sequelize.define("role", {
  id: { //ถ้าเกิดเราไม่ได้กำหนด primary key มันจะทำให้ id เป็นค่า defult ของ sequelize
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Role;
