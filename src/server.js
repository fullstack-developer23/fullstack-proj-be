require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/routes");
const orderRouter = require("./orders/routes");
const port = process.env.PORT || 5001;

const User = require("./user/model");
const Order = require("./orders/model");

const app = express();

app.use(express.json());

app.use(cors());

app.use(userRouter);
app.use(orderRouter);

app.get("/healthy", (req, res) => {
  res.status(200).json({ message: "API is health" });
});

const syncTables = async () => {
  User.hasMany(Order);
  Order.belongsTo(User);

  await User.sync({ alter: true });
  await Order.sync();
};

app.listen(port, () => {
  syncTables();
  console.log(`App listening on port ${port}`);
});
