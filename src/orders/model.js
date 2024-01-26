const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Order = sequelize.define("Order", {
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    forgeinKey: true,
  },
});

module.exports = Order;
