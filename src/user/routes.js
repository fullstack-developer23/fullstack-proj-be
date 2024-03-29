const { Router } = require("express");
const userRouter = Router();

const {
  addUser,
  login,
  deleteOneByUser,
  updateEmail,
  getAllUsers,
} = require("./controllers");
const { hashPass, comparePass } = require("../middleware/auth");

userRouter.post("/users", hashPass, addUser);

userRouter.post("/users/login", comparePass, login);

userRouter.delete("/users/delete", deleteOneByUser);

userRouter.put("/users/updateUser", updateEmail);

userRouter.get("/users", getAllUsers);

module.exports = userRouter;
