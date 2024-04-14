import { BrowserRouter, Routes, Route } from "react-router-dom";
import USChallenge from "./pages/MapPage"
import FlightListPage from "./pages/FlightList/FlightList";
import LandingPage from "../src/pages/LandingPage/LandingPage";
import Homepage from "../src/pages/Homepage/Homepage";
import Login from "../src/pages/Login/Login";
import Signup from "../src/pages/Signup/Signup";
import "../styles/partials/_typography.scss";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
         {/*  <Route path="/signup" element={<Authenication />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/flights" element={<FlightListPage />} />
          <Route path="/us-states-challenge" element={<USChallenge />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
