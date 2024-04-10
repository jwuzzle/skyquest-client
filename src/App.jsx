import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FlightListPage from './pages/FlightList/FlightList'
import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../src/components/Header/Header'

import '../styles/partials/_typography.scss'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/flights" element={<FlightListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
