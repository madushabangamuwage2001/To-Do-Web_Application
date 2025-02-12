// controllers/ToDoControllers.js


module.exports.getToDO = async (req, res) => {
  try {
    const todos = await ToDoModel.find();  // Fixed variable name from 'toDo' to 'todos'
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