
import { useState } from 'react'
import './App.css'
import UserForm from './UserForm';
import UserInfo from './UserInfo';


function App() {
    const[user,setUser] = useState(null);
    const handleUserSubmit = (userData) =>{
      setUser(userData)
      console.log("User submitted dta : ",userData);
    }
    return(
      <>
        <UserForm onSubmit={handleUserSubmit}/>
        {user && <UserInfo user={user} />}
      </>
    )
}

export default App
