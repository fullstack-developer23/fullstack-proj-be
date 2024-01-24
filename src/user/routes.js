const { Router } = require("express");
const userRouter = Router();

const { addUser, login } = require("./controllers");

userRouter.post("/", addUser);

userRouter.post("/users/login", login);

module.exports = userRouter;
