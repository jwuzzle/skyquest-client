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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
