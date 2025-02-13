import { useEffect, useState } from "react";
import ToDo from "./components/ToDo"; 
import { getAllToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setTodo] = useState([]);

  useEffect(() => {

    getAllToDo(setTodo);
  }, []);

  return (
    <div className="App">
      <div className="Container">
        <h1>To-Do List</h1>
        <div className="top">
          <input type="text" placeholder="ADD TODO..." />

          <div className="add">ADD</div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo key={item._id} text={item.text} />
          ))}
          <ToDo text="Hello" />
          <ToDo text="Hello" />
          <ToDo text="Hello" />
        </div>
      </div>
    </div>
  );
}

export default App;
