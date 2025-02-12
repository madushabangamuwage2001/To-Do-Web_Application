// controllers/ToDoControllers.js

const ToDoModel = require("../models/ToDoModel"); // Ensure correct path and name


module.exports.getToDO = async (req, res) => {
  try {
    const todos = await ToDoModel.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.saveToDO = async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = await ToDoModel.create({ text });
    console.log("Added successfully");
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.updateToDO = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated successfully"))
    .catch((err) => console.log(err));
};

module.exports.deleteToDO = async (req, res) => {
  const { _id } = req.body;
  ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => console.log(err));
};
