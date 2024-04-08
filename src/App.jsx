import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Map from './pages/MapPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/map' element={<Map />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
