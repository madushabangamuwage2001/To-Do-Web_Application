import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllToDo, addToDo, updateToDo, deleteToDo} from "./utils/HandleApi";

function App() {

  const[toDo, setToDo] = useState([])
  const[text , setText] = useState("")
  const[isUpating , setIsUpdating] = useState(false)
  const[toDoId , setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  },[])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  };

  return (
    <div className="App">
      <div className = "container">

        <h1>TO DO APP</h1>

        <br></br>
        <br></br>

        <div className = "Top">

          <input 
          type  = "text" 
          placeholder = "Add your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          />

          <div 
          className = "addbtn" 
          onClick={isUpating ? 
          () => updateToDo(toDoId ,text , setToDo , setText , setIsUpdating) 
          : () => addToDo(text,setText , setToDo)}>
          {isUpating ? "Update" :"ADD" }
            </div>

          <div className = "list">

            {toDo.map((item) => <ToDo 
            key={item._id} 
            text = {item.text} 
            updateMode = {() => updateMode(item._id, item.text)}
            deleteToDo = {() => deleteToDo(item._id,setToDo)}/>)}


          </div>
          
        </div>

      </div>
       
    </div>
  );
}

export default App;
                                                       