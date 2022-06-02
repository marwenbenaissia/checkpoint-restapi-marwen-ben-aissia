const express = require("express");
const user = require("../model/user");
const routes = express.Router();
const User = require("../model/user");
//  POST :  ADD A NEW USER TO THE DATABASE
routes.post("/", async function (req, res) {
  const user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    age: req.body.age,
    email: req.body.email,
  });
  try {
    const saveUser = await user.save();
    res.status(200).json(saveUser);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
//POST :  ADD A NEW USER TO THE DATABASE
//GET :  RETURN ALL USERS
routes.get("/", async function (req, res) {
  try {
    const Userss = await User.find();
    res.status(200).json(Userss);
  } catch (err) {
    res.status(400).json({ message1: err });
  }
});
// GET :  RETURN ALL USERS
// GET :  RETURN  USER by id
routes.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});
// GET :  RETURN  USER by id
// PUT : EDIT A USER BY ID
routes.put("/:userId", async function (req, res) {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      { $set: { name: req.body.name } }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});
// PUT : EDIT A USER BY ID
// DELETE : REMOVE A USER BY ID
routes.delete("/:userId", async function (req, res) {
  try {
    const deleteuser = await user.remove({ _id: req.params.userId });
    res.json(deleteuser);
  } catch (err) {
    res.json({ message: err });
  }
});
// DELETE : REMOVE A USER BY ID
module.exports = routes;
