
import { useState } from 'react'
import './App.css'
import UserForm from './UserForm';
import UserInfo from './UserInfo';


function App() {
    const[users,setUser] = useState([]);
    const handleUserSubmit = (userData) =>{
      setUser(userData)
      console.log("User submitted dta : ",userData);
    }
    return(
      <>
        <UserForm onSubmit={handleUserSubmit}/>
       {users && < UserInfo user={users}/> }
      </>
    )
}

export default App
