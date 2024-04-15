import { BrowserRouter, Routes, Route } from "react-router-dom";
import USChallenge from "./pages/MapPage"
import ContinentsChallenge from "./pages/Continents/Continents"
import FlightListPage from "./pages/FlightList/FlightList";
import LandingPage from "../src/pages/LandingPage/LandingPage";
import Homepage from "../src/pages/Homepage/Homepage";
import Login from "../src/pages/Login/Login";
import Signup from "../src/pages/Signup/Signup";
import ChallengesHome from "../src/pages/Challenges/ChallengesHome"
import USAChallengesHome from "../src/pages/USChallenge/USAChallengeHome/USAChallengeHome"
import USAMidAtlantic from "../src/pages/USChallenge/USAMidAtlantic/USAMidAtlantic"
import USANewEngland from "./pages/USChallenge/USANewEngland/USANewEngland";
import USASouthAtlantic from "./pages/USChallenge/USASouthAtlantic/USASouthAtlantic";
import USASouthEastCentral from "./pages/USChallenge/USASouthEastCentral/USASouthEastCentral"
import USAPacificWest from "./pages/USChallenge/USAPacificWest/USAPacificWest"
import TheAmazingRace from "./pages/Challenges/AmazingRace/AmazingRace"
import "../styles/partials/_typography.scss";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/flights" element={<FlightListPage />} />
          <Route path="/challenges" element={<ChallengesHome /> } />
          <Route path="/us-states-challenge" element={<USChallenge />} />
          <Route path="/challenges/us-states-challenge" element={<USAChallengesHome />} />
          <Route path="/challenges/us-states-challenge/northeast-mid-atlantic" element={<USAMidAtlantic />} />
          <Route path="/challenges/us-states-challenge/northeast-new-england" element={<USANewEngland />} />
          <Route path="/challenges/us-states-challenge/south-atlantic" element={<USASouthAtlantic />} />
          <Route path="/challenges/us-states-challenge/south-east-central" element={<USASouthEastCentral />} />
          <Route path="/challenges/us-states-challenge/west-pacific" element={<USAPacificWest />} />
          {/* <Route path="/challenges/us-states-challenge/south-west-central" element={<USChallenge />} />
          <Route path="/challenges/us-states-challenge/midwest-west" element={<USChallenge />} />
          <Route path="/challenges/us-states-challenge/midwest-east" element={<USChallenge />} />
          <Route path="/challenges/us-states-challenge/west-pacific" element={<USAPacificWest />} />
          <Route path="/challenges/us-states-challenge/west-mountain" element={<USChallenge />} /> */}
          <Route path="/challenges/the-amazing-race" element={<TheAmazingRace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
