import { useState } from 'react'
import './App.css'

function App() {
  const[todolist,setToDoList] = useState([]);
  const[inputValue,setInputValue] = useState("");
  const changeInput = (event)=>{
    setInputValue(event.target.value);
  }
  const addTask = () =>{
    let task = {
      id: todolist.length===0 ? 1 : todolist[todolist.length-1].id + 1,
      taskName: inputValue,
    }
    setToDoList([...todolist,task])
  }

  const deleteTask = (id) =>{
    const newTaskList = todolist.filter((taks)=>  taks.id!==id)
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
        {todolist.map((task)=>{
          return(
            <>
              <h3>{task.taskName}</h3>
              <button onClick={()=>deleteTask(task.id)}>X</button>
            </>
            
          )
        })}
      </div>
     </div>
    </>
  )
}

export default App
