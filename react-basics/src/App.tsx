/* eslint-disable @typescript-eslint/no-unused-vars */


function App() {
  
  const myName = "vishal";
  const appName = <h2>React</h2>
  
  return (
    <>
      <h1>Hello {myName} react site</h1>
      {appName}
      {appName}
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
const GetNameComponent = () =>{
  return(
    <h1>getNameComponent</h1>
  )
}


export default App
