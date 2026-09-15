import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Router/Home'
import Dashboard from './Router/Dashboard/Dashboard'
import Projects from './Router/Projects/Projects'
import Contact from './Router/Contact/Contact'
import Profile from './Router/Profile/Profile'

import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/projects' element={<Projects />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/profile' element={<Profile />}></Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App
