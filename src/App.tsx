import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={< Login />} />
        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </Router>
  )
}

export default App
