const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const ToDoModel = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDoModel;
