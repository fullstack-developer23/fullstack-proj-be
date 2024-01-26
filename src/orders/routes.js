const express = require("express");
const router = express.Router();

const { addOrder, getAllOrders } = require("./controllers");

router.post("/orders", addOrder);
router.get("/orders", getAllOrders);

module.exports = router;
