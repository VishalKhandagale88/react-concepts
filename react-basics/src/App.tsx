/* eslint-disable @typescript-eslint/no-unused-vars */


function App() {
  
  const myName = "vishal";
  const appName = <h2>React</h2>
  
  return (
    <>
      <h1>Hello {myName} react site</h1>
      {appName}
      {appName}
      <GetNameComponent username="vishal" age={23} email="vishal@gmail.com" />
      <hr></hr>
      <Job salary={20000} position="SDE" company="Google" />
      <Job salary={10000} position="full-stack-developer" company="Amazon" />
      <Job salary={20022} position = "consultant" company="Instgram" />
    </>
  )
}
// the below one is just a simple function
const getName = () =>{
  return "vishal";
}

// below one is a react component which returns a jsx 
// components always having namig convention which is PascalCase
// in components we always return some ui
const GetNameComponent = (props) =>{
  return(
    <>
      <h1>{props.username}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </>
    
  )
}

const Job = (props) =>{
  return(
    <>
      <p>{props.salary} {props.position} {props.company} </p>
    </>
  )
}


export default App
