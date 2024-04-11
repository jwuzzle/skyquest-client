import { useState, useEffect } from 'react'
import USAMap from '../components/Map/Map'
import Tracker from '../components/Tracker/Tracker'
import StateCounter from '../components/Tracker/StateCounterCard'
import axios from "axios";
import './Map.scss'
import ProgressBar from '../components/Tracker/ProgressBar'
import ChallengeBanner from '../components/Banners/ChallengeBanner'
import mapusa from '../assets/images/map-usa.jpg'



/* const stateData = [
  {
    "name": "Florida",
    "description": "hello florida"
  },
  {
    "name": "Maryland",
    "description": "hello maryland"
  },
  {
    "name": "Virginia",
    "description": "hello virginia"
  }
]
console.log(stateData) */

const URL = import.meta.env.VITE_APP_BASE_URL

const Map = () => {

const [stateData, setStateData] = useState([]);

  const fetchStateData = async () => {
    try {
      const response = await axios.get(`${URL}/states`);
      setStateData(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchStateData();
  }, []);

  console.log(stateData.state)


  const [totalCount, setTotalCount] = useState(0)
  const [progressState, setProgressState] = useState(0)
  const [visited, setVisited] = useState(false)

 /*   const progressState = {
      percent: 0
    };
    const updateProgressBar = (field, val) => {
      setProgressState( {[field]: val});
    };
 */
    const handleButtonClick = () => {
      setProgressState(progressState + .09803922);
      setTotalCount(totalCount+1);
      setVisited(true)
    }

console.log(visited)

  return (
   <> <div>Map</div>
   <ChallengeBanner 
   image={mapusa}
   text="outline of the United States in red, white and blue: created by Allexxander"
   header="Conquer the 51-State Challenge: Explore Every Corner of the USA!"
   description="Embark on the ultimate lifetime challenge: visit all 51 states in the United States. But here's the catch: mere pass-throughs won't suffice. Dive deep into each state's culture, landscapes, and history. From bustling cities to serene countryside, explore every corner of your country. Our user-friendly interface lets you easily check off each state as you visit, while a progress bar tracks your journey towards the ultimate goal. Pack your bags, plot your route, and get ready for the adventure of a lifetime, one state at a time."
/>
    <USAMap 
      state={stateData.state}/>
      <ProgressBar 
      width={500} percent={progressState}/>
    <p>{totalCount} / 51</p>
    <div className="stateCard">
    {stateData.map((state, index) => (
      <StateCounter 
      key={index}
      image={state.image}
      state={state.state}
      state_code={state.state_code}
      description={state.state_description}
      onButtonClick={handleButtonClick}
      />
    ))}
    </div>
    </>
  )
}

export default Map