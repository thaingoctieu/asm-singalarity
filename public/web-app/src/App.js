import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Login, Signup, Info } from './pages'
import { AppContext } from './store/context';

function App() {
  // const context = useContext(AppContext)
  return (
    <React.Fragment >
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Signup />} />
        {
          // localStorage.getItem('login') === true &&
          <Route path='/info' element={<Info />} />
        }
      </Routes>
    </React.Fragment>
  );
}

export default App;
