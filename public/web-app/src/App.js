import React from 'react'
import './App.css';

import { Routes, Route } from 'react-router-dom'

import { Login, Signup, Info } from './pages'

function App() {
  return (
    <React.Fragment >
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Signup />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
