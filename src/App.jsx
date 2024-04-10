import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../src/components/Header/Header'
import Authenication from '../src/Authentication'
import '../styles/partials/_typography.scss'
import Homepage from '../src/pages/Homepage/Homepage'


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
       {/*  <Route path='/' element={<LandingPage />} /> */}
        <Route path='/signup' element={<Authenication />} />
        <Route path='/home' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
