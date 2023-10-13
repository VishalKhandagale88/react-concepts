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

  const deleteTask = (taskName: never) =>{
    const newTaskList = todolist.filter((taks)=>  taks!=taskName)
    setToDoList(newTaskList);
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
            <>
              <h3 key={key}>{task}</h3>
              <button onClick={()=>deleteTask(task)}>X</button>
            </>
            
          )
        })}
      </div>
     </div>
    </>
  )
}

export default App
