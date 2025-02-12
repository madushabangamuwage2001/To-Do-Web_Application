// models/ToDoModel.js
const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  text: {  // Changed from 'task' to match your controller
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("ToDo", ToDoSchema);