import React from 'react'

import Cv from '../src/component/Cv'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cv />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App