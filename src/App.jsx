import React from "react"
import  ReactDOM  from "react"
import Navbar from "./navbar"
import Content from "./content"



function App() {
  const [count, setCount] = React.useState(0)
  const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

  return (
    <>
      <Navbar darkMode={darkMode}  toggleDarkMode={toggleDarkMode}/>
      
      <Content  darkMode={darkMode}/>

      

    </>
  )
}

export default App
