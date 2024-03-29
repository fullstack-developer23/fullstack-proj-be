const User = require("./model");

const addUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(201).json({ message: "User created", user: user });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const login = async (req, res) => {
  try {
    res.status(201).json({ message: "User logged in", user: req.user });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const deleteOneByUser = async (req, res) => {
  try {
    const deleteUser = await User.destroy({
      where: {
        username: req.body.username,
      },
    });

    res.status(201).json({ message: "User deleted", deleteUser: deleteUser });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const updateEmail = async (req, res) => {
  try {
    const result = await User.update(
      { email: req.body.email },
      { where: { username: req.body.username } }
    );
    console.log("result", result);

    const updatedUser = await User.findOne({
      where: { username: req.body.username },
    });
    console.log("updatedUser", updatedUser);

    res.status(201).json({ message: "Email updated", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({ message: "All users here", users: users });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
module.exports = {
  addUser: addUser,
  login: login,
  deleteOneByUser: deleteOneByUser,
  updateEmail: updateEmail,
  getAllUsers: getAllUsers,
};
