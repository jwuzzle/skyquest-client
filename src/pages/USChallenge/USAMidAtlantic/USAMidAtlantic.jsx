import "../../USChallenge/Map.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StateCounter from "../../../components/Tracker/StateCounterCard";
import axios from "axios";
import usMapImage from "../../../assets/images/usa-elements-paper-map.jpg";
import ChallengeBanner from "../../../components/Banners/ChallengeBanner";
import AuthenticatedHeader from "../../../components/Header/AuthenticatedHeader";
import { jwtDecode } from "jwt-decode";
import statesData from "../../../data/states.json";
import Description from "../../../components/TextComponents/Descriptions/Description";

const URL = import.meta.env.VITE_APP_BASE_URL;

const USAMidAtlantic = () => {
  const token = sessionStorage.getItem("JWTtoken");
  const decoded = jwtDecode(token);

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
    }
  }, [visitedDetails]);

  const [stateData, setStateData] = useState([]);
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

  const navigate = useNavigate();
  const [ny, setNy] = useState(false);
  const [nj, setNj] = useState(false);
  const [pa, setPa] = useState(false);

  const handleNyClick = async (event) => {
    setNy(true);
  };

  const handleNjClick = async (event) => {
    setNj(true);
  };

  const handlePaClick = async (event) => {
    setPa(true);
  };

  const constUpdateTableNy = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ny: ny,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-mid-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ny' value:", error);
    }
  };

  const constUpdateTableNj = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        nj: nj,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-mid-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'nj' value:", error);
    }
  };

  const constUpdateTablePa = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        pa: pa,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-mid-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'pa' value:", error);
    }
  };

  useEffect(() => {
    if (ny) {
      constUpdateTableNy();
    }
  }, [ny]);

  useEffect(() => {
    if (nj) {
      constUpdateTableNj();
    }
  }, [nj]);

  useEffect(() => {
    if (pa) {
      constUpdateTablePa();
    }
  }, [pa]);

  return (
    <>
      <AuthenticatedHeader />
      <ChallengeBanner
        image={usMapImage}
        text="Map of the usa with key landmarks on top of the map."
        header="The Northeast Mid-Atlantic"
      />
      <Description description="Embark on a thrilling expedition through the vibrant Northeast Mid-Atlantic region, including New York, New Jersey, and Pennsylvania. Explore iconic cities, historic landmarks, and scenic wonders while earning rewards with each state you conquer. Join the adventure and discover the diverse charm of the Northeast Mid-Atlantic in this exhilarating challenge!" />
      <div className="state-cards">
        <StateCounter
          state={statesData[30].state}
          state_code={statesData[30].state_code}
          description={statesData[30].state_description}
          visited={visitedDetails[0]?.nj === 0 ? "0" : "1"}
          onButtonClick={handleNjClick}
          image={statesData[30].image}
        />
        <StateCounter
          state={statesData[32].state}
          state_code={statesData[32].state_code}
          description={statesData[32].state_description}
          visited={visitedDetails[0]?.ny === 0 ? "0" : "1"}
          onButtonClick={handleNyClick}
          image={statesData[32].image}
        />
        <StateCounter
          state={statesData[38].state}
          state_code={statesData[38].state_code}
          description={statesData[38].state_description}
          visited={visitedDetails[0]?.pa === 0 ? "0" : "1"}
          onButtonClick={handlePaClick}
          image={statesData[38].image}
        />
      </div>
    </>
  );
};

export default USAMidAtlantic;
