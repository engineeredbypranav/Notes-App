import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
  
  <Route path = "/" element = {<Home/>} />
  <Route path = "/login" element = {<Login/>} />
  <Route path = "/signup" element = {<SignUp/>} />

  </Routes>
  
  </BrowserRouter>
  )
}

export default App