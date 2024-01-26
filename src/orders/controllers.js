const Order = require("./model");

const addOrder = async (req, res) => {
  try {
    const order = await Order.create({
      totalPrice: req.body.totalPrice,
      UserId: req.body.UserId,
    });

    res.status(201).json({ message: "Order created", order: order });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();

    res.status(200).json({ message: "All orders here", orders: orders });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addOrder,
  getAllOrders,
};
