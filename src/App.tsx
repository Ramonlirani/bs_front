import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Register } from './screens/Register'
import { Login } from './screens/Login'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registrar' element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
