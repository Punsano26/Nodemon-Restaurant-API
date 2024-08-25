const { Datatype, DataTypes } = require("sequelize");
const  sequelize  = require("./db");
//define DB Schema
const Restaurant = sequelize.define("restaurant", {  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Restaurant.sync({ focus: true })
  .then(() => {
    console.log("Table Created or already exists");
  })
  .catch((err) => {
    console.log("Error creating table", err);
  });
module.exports = Restaurant;
