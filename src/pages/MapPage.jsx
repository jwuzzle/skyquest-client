import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import USAMap from "../components/Map/Map";
import Tracker from "../components/Tracker/Tracker";
import StateCounter from "../components/Tracker/StateCounterCard";
import axios from "axios";
import "../pages/USChallenge/Map.scss"
import ProgressBar from "../components/Tracker/ProgressBar";
import ChallengeBanner from "../components/Banners/ChallengeBanner";
import mapusa from "../assets/images/map-usa.jpg";
import AuthenticatedHeader from "../components/Header/AuthenticatedHeader";
import { jwtDecode } from "jwt-decode";

const URL = import.meta.env.VITE_APP_BASE_URL;

const Map = () => {
  //vvvvvvvvvvvvvvvv using jwt payload data for ID to pull challenge data from database based on ID vvvvvvvvvvvvvvvv//

  const [isLoading, setIsLoading] = useState(true);
 /*  const [decoded, setDecoded] = useState() */
  const token = sessionStorage.getItem("JWTtoken");
  const decoded = jwtDecode(token);

  console.log(decoded)

 /*  useEffect(() => {
    if (!token) {
      return;
    } 
    
    try{
      const decodedToken = jwtDecode(token);
      setDecoded(decodedToken)
    } catch (error) {
      console.error("Error decoding token:", error);
    }
      setIsLoading(false);
    }
, [token]); */

  //^^^^^^^^^^^^ using jwt payload data for ID to pull challenge data from database based on ID ^^^^^^^^^^^^^^^^^^//

  //vvvvvvvvvvvvvvvv fetching the challenge data from the database based on ID vvvvvvvvvvvvvvvv//

  const [visitedDetails, setVisitedDetails] = useState([]);

  const fetchVisitedData = async () => {
    try {
      const response = await axios.get(
        `${URL}/us-states-challenge/${decoded.id}`
      );
      console.log(response.data);
      setVisitedDetails(response.data);
    } catch (error) {
      console.error("Unable to get visited data:", error);
    }
  };

  useEffect(() => {
    fetchVisitedData();
  }, []);

  useEffect(() => {
    if (visitedDetails.length > 0) {
      console.log(visitedDetails[0].az);
    }
  }, [visitedDetails]);

  console.log(decoded)

  console.log(visitedDetails[0]?.az)
  console.log(visitedDetails[0]?.md)

  //^^^^^^^^^^^^ fetching the challenge data from the database based on ID ^^^^^^^^^^^^^^^^^^//

  //vvvvvvvvvvvvvvvv populating state cards with JSON data vvvvvvvvvvvvvvvv//

  //grabbing states data to populate each card on the page in the map below
  const [stateData, setStateData] = useState([]);

  //fetching state data to build the cards
  const fetchStateData = async () => {
    try {
      const response = await axios.get(`${URL}/states`);
      setStateData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStateData();
  }, []);

  //^^^^^^^^^^^^ populating state cards with JSON data ^^^^^^^^^^^^^^^^^^//

  /* const [stateCodeData, setStateCodeData] = useState([]); */
  const [totalCount, setTotalCount] = useState(0);
  const [progressState, setProgressState] = useState(0);
  const [visited, setVisited] = useState(false);

  const handleButtonClick = () => {
    setProgressState(progressState + 0.09803922);
    setTotalCount(totalCount + 1);
    setVisited(true);

    //put request to change the value in the table 
  };

//vvvvvvvvvvvvvvvv put/edit challenge data from UI the database based on ID vvvvvvvvvvvvvvvv//

const navigate = useNavigate()
const isFirstRender = useRef(true)
const [nj, setNj] = useState(false)
const [ny, setNy] = useState(false)
const [az, setAz] = useState(false)
const [ak, setAk] = useState(false)
const [md, setMd] = useState(false)

const handleNjClick = async (event) => {
  event.preventDefault();
  setNj(true);
}

const handleNyClick = async (event) => {
  event.preventDefault();
  setNy(true);
}

const handleMdClick = async (event) => {
  event.preventDefault();
  setMd(true);
}

const constUpdateTableNJ = async () => {
  try {
    await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
      nj: nj,
    });
    console.log(nj)
    console.log(onSubmit)
    alert("Another one checked off the list");
    navigate("/us-states-challenge");
    window.location.reload();
  } catch (error) {
    console.error("Error updating 'nj' value:", error)
  }
}

const constUpdateTableNY = async () => {
  try {
    await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
      ny: ny,
    });
    console.log(nj)
    console.log(onSubmit)
    alert("Another one checked off the list");
    navigate("/us-states-challenge");
    window.location.reload();
  } catch (error) {
    console.error("Error updating 'nj' value:", error)
  }
}

const constUpdateTableMd = async () => {
  try {
    await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
      md: md,
    });
    console.log(nj)
    console.log(onSubmit)
    alert("Another one checked off the list");
    navigate("/us-states-challenge");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.error("Error updating 'nj' value:", error)
  }
}

useEffect(() => {
  if (nj) {
  constUpdateTableNJ();}
}, [nj]);


useEffect(() => {
  if (ny) {
  constUpdateTableNY();}
}, [ny]);

useEffect(() => {
  if (md) {
  constUpdateTable();}
}, [md]);



console.log(nj)




 /* const [md, setMd] = useState(false)
  
  const handleClickVisit = () => {
    setMd((prevState) => !prevState);
  }

  console.log(md) */



  return (
    <>
     AZ: {visitedDetails[0]?.az === 0 ? "false" : "true"}
     AK: {visitedDetails[0]?.ak === 0 ? "false" : "true"}
     MD: {visitedDetails[0]?.md === 0 ? "false" : "true"}
    WY  {visitedDetails[0]?.wy === 0 ? "false" : "true"}
      NY{visitedDetails[0]?.ny === 0 ? "false" : "true"}
      NJ{visitedDetails[0]?.nj === 0 ? "false" : "true"}
  
      <AuthenticatedHeader />

      {/* <StateCounter
            state="Alaska"
            state_code="ak"
            description="Alaska is beautiful"
            check={visitedDetails[0]?.ak === 0 ? "false" : "true"}
            onButtonClick={handleButtonClick}
          />
          <StateCounter
            state="Maryland"
            state_code="md"
            description="Maryland is beautiful"
            check={visitedDetails[0]?.md === 0 ? "false" : "true"}
            onButtonClick={handleButtonClick}
          /> */}
        
      <ChallengeBanner
        image={mapusa}
        text="outline of the United States in red, white and blue: created by Allexxander"
        header="Conquer the 51-State Challenge: Explore Every Corner of the USA!"
        description="Embark on the ultimate lifetime challenge: visit all 51 states in the United States. But here's the catch: mere pass-throughs won't suffice. Dive deep into each state's culture, landscapes, and history. From bustling cities to serene countryside, explore every corner of your country. Our user-friendly interface lets you easily check off each state as you visit, while a progress bar tracks your journey towards the ultimate goal. Pack your bags, plot your route, and get ready for the adventure of a lifetime, one state at a time."
      />
      <button onClick={handleNjClick}>Click me NJ</button>
      <button onClick={handleNyClick}>Click me NY</button>
      <button onClick={handleMdClick}>Click me Az</button>
      <USAMap state={stateData.state} />
  
      <ProgressBar width={500} percent={progressState} />
      <p>{totalCount} / 51</p>
      <div className="stateCard">
        {stateData.map((state, index) => (
          <StateCounter
            key={index}
            image={state.image}
            state={state.state}
            state_code={state.state_code}
            description={state.state_description}
            /* check={visitedDetails[0]?.state_code === 0 ? "false" : "true"} */
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>

    
    </>
  );
};


export default Map;
