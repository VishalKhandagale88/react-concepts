
import { useState } from "react";
function UserForm({onSubmit}) {
    const[userData,setUSerData]=useState({
        name:"",
        email:"",
        password:""
      })

      const handelChange = (event) =>{
        const{name,value} = event.target;
        // console.log("In UserForm name and value data",{name,value});
        setUSerData({...userData,[name]:value})
      }

      const handleSubmit = (event) =>{
        event.preventDefault();
        onSubmit(userData);
      }
  
    return (
      <>
        <h1>Users Data</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name : </label>
            <input type="text"
            name='name'
            value={userData.name}
            onChange={handelChange}/>

            <label htmlFor='email'>Email</label>
            <input type="email"
            name="email"
            value={userData.email}
            onChange={handelChange} />

            <label htmlFor='password'>Password</label>
            <input type="password" name="password"
            value={userData.password}
            onChange={handelChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
      
    )
}

export default UserForm