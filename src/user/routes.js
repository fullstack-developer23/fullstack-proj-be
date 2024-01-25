const { Router } = require("express");
const userRouter = Router();

const { addUser, login } = require("./controllers");
const { hashPass, comparePass } = require("../middleware/auth");

userRouter.post("/users", hashPass, addUser);

userRouter.post("/users/login", comparePass, login);

module.exports = userRouter;
