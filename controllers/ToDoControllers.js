
const ToDoModel = require("../models/ToDoModel");

module.exports.getToDO = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.status(200).json(todos);
};

module.exports.saveToDO = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text }).then((data) => {
    console.log("add successfully");
    console.log(data);
    res.send(data);
  });
  res.send(toDo);
};
