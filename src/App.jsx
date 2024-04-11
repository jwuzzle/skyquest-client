import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Map from './pages/MapPage'
import FlightListPage from './pages/FlightList/FlightList'
import "./App.scss";
import Header from '../src/components/Header/Header'
import LandingPage from '../src/pages/LandingPage/LandingPage'
import Authenication from '../src/Authentication'
import '../styles/partials/_typography.scss'
import Homepage from '../src/pages/Homepage/Homepage'


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/signup' element={<Authenication />} />
        <Route path='/home' element={<Homepage />} />
        <Route path="/flights" element={<FlightListPage />} />
        <Route path='/map' element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
