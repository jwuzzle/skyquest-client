import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import USAMap from "../components/Map/Map";
import Tracker from "../components/Tracker/Tracker";
import StateCounter from "../components/Tracker/StateCounterCard";
import axios from "axios";
import "./Map.scss";
import ProgressBar from "../components/Tracker/ProgressBar";
import ChallengeBanner from "../components/Banners/ChallengeBanner";
import mapusa from "../assets/images/map-usa.jpg";
import AuthenticatedHeader from "../components/Header/AuthenticatedHeader";
import { jwtDecode } from "jwt-decode";

const URL = import.meta.env.VITE_APP_BASE_URL;

const Map = () => {
  //vvvvvvvvvvvvvvvv using jwt payload data for ID to pull challenge data from database based on ID vvvvvvvvvvvvvvvv//

  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem("JWTtoken");
  const decoded = jwtDecode(token);

  useEffect(() => {
    if (!token) {
      return;
    } else {
      setIsLoading(false);
    }
  }, [token]);

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

  return (
    <>
      {visitedDetails[0]?.az === 0 ? "false" : "true"}
      {visitedDetails[0]?.ak === 0 ? "false" : "true"}
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
            check={visitedDetails[0]?.state_code === 0 ? "false" : "true"}
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>

    
    </>
  );
};

export default Map;
