import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'

import Header from './components/Header'
import Countries from './components/Countries'
import Country from './components/Country'
import './App.css'

// export const ThemeContext = createContext('dark')

type appFile = {
  path: string
  theme: string
  setTheme: (theme: string) => void
  value: string
  toggleTheme: () => void
}

function App() {
  const [theme, setTheme] = useState<string>('dark')

  console.log(theme)
  return (
    <div className="App" id={theme}>
      <BrowserRouter>
        <Header setTheme={setTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/:name" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
