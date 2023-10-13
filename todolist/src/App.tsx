import { useState } from 'react'
import './App.css'

function App() {
  const[todolist,setToDoList] = useState([]);
  const[inputValue,setInputValue] = useState("");
  const changeInput = (event)=>{
    setInputValue(event.target.value);
  }
  const addTask = () =>{
    const newToDoList = [...todolist,inputValue];
    setToDoList(newToDoList);
  }
  return (
    <>
     <div className='App'>
      <div className='addTask'>
        <input onChange={changeInput} type="text" />
        <button onClick={addTask} >Add Task</button>
      </div>
      <div className='list'>
        {todolist.map((task,key)=>{
          return(
            <h3 key={key}>{task}</h3>
          )
        })}
      </div>
     </div>
    </>
  )
}

export default App
