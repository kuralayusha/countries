import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<Country />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
