import React from 'react'
import "./App.css"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"

function App() {
  const isRegistered = true
  return (
    <div>
      {isRegistered ? <Login /> : <Signup />}
    </div>
  )
}

export default App
