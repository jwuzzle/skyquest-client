import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FlightListPage from './pages/FlightList/FlightList'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/flights" element={<FlightListPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
