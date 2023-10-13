import { useState } from 'react'
import './App.css'

function App() {
  const[todolist,setToDoList] = useState([]);
  const[inputValue,setInputValue] = useState("");
  const changeInput = (event)=>{
    setInputValue(event.target.value);
  }
  return (
    <>
     <div className='App'>
      <div className='addTask'>
        <input onChange={changeInput} type="text" />
        <button  >Add Task</button>
      </div>
      <div className='list'></div>
     </div>
    </>
  )
}

export default App
