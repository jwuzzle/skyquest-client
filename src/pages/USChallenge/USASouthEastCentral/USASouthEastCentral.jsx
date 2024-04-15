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

const USASouthEastCentral = () => {
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
  const [ky, setKy] = useState(false);
  const [tn, setTn] = useState(false);
  const [al, setAl] = useState(false);
  const [ms, setMs] = useState(false);

  const handleKyClick = async (event) => {
    setKy(true);
  };

  const handleTnClick = async (event) => {
    setTn(true);
  };

  const handleAlClick = async (event) => {
    setAl(true);
  };

  const handleMsClick = async (event) => {
    setMs(true);
  };

  const constUpdateTableKy = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ky: ky,
      });
      alert("Way to go! Another one checked off the list.");
      navigate("/challenges/us-states-challenge/south-east-central");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'md' value:", error);
    }
  };

  const constUpdateTableTn = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        tn: tn,
      });
      alert("Way to go! Another one checked off the list.");
      navigate("/challenges/us-states-challenge/south-east-central");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'tn' value:", error);
    }
  };

  const constUpdateTableAl = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        al: al,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-east-central");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'al' value:", error);
    }
  };

  const constUpdateTableMs = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ms: ms,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-east-central");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ms' value:", error);
    }
  };

  useEffect(() => {
    if (ky) {
      constUpdateTableKy();
    }
  }, [ky]);

  useEffect(() => {
    if (tn) {
      constUpdateTableTn();
    }
  }, [tn]);

  useEffect(() => {
    if (al) {
      constUpdateTableAl();
    }
  }, [al]);

  useEffect(() => {
    if (ms) {
      constUpdateTableMs();
    }
  }, [ms]);

  return (
    <>
      <AuthenticatedHeader />
      <ChallengeBanner
        image={usMapImage}
        text="Map of the usa with key landmarks on top of the map."
        header="The South East Central"
        url="/challenges/us-states-challenge/"
      />
      <Description description="Embark on an exhilarating expedition through the captivating Southeast Central region, spanning Mississippi, Alabama, Tennessee, and Kentucky. Dive into a tapestry of heritage, culture, and natural marvels as you traverse each state, unlocking treasures and triumphs. Prepare for an adventure filled with discovery and the allure of the Southeast Central's vibrant spirit!" />
      <div className="state-cards">
        <StateCounter
          state={statesData[17].state}
          state_code={statesData[17].state_code}
          description={statesData[17].state_description}
          visited={visitedDetails[0]?.ky === 0 ? "0" : "1"}
          onButtonClick={handleKyClick}
          image={statesData[17].image}
        />
        <StateCounter
          state={statesData[42].state}
          state_code={statesData[42].state_code}
          description={statesData[42].state_description}
          visited={visitedDetails[0]?.tn === 0 ? "0" : "1"}
          onButtonClick={handleTnClick}
          image={statesData[42].image}
        />
        <StateCounter
          state={statesData[0].state}
          state_code={statesData[0].state_code}
          description={statesData[0].state_description}
          visited={visitedDetails[0]?.al === 0 ? "0" : "1"}
          onButtonClick={handleAlClick}
          image={statesData[0].image}
        />
        <StateCounter
          state={statesData[24].state}
          state_code={statesData[24].state_code}
          description={statesData[24].state_description}
          visited={visitedDetails[0]?.ms === 0 ? "0" : "1"}
          onButtonClick={handleMsClick}
          image={statesData[24].image}
        />
      </div>
    </>
  );
};

export default USASouthEastCentral;
