import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Countries from './components/Countries'
import Country from './components/Country'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<Country />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
