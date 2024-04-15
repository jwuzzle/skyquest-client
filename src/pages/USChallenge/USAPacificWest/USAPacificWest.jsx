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

const USAPacific = () => {
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
  const [wa, setWa] = useState(false); 47
  const [or, setOr] = useState(false); 37
  const [ca, setCa] = useState(false); 4
  const [ak, setAk] = useState(false); 1
  const [hi, setHi] = useState(false); 11

  const handleWaClick = async (event) => {
    setWa(true);
  };

  const handleOrClick = async (event) => {
    setOr(true);
  };

  const handleCaClick = async (event) => {
    setCa(true);
  };

  const handleAkClick = async (event) => {
    setAk(true);
  };

  const handleHiClick = async (event) => {
    setHi(true);
  };

  const constUpdateTableWa = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        wa: wa,
      });
      alert("Way to go! Another one checked off the list.");
      navigate("/challenges/us-states-challenge/west-pacific");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'wa' value:", error);
    }
  };

  const constUpdateTableOr = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        or: or,
      });
      alert("Way to go! Another one checked off the list.");
      navigate("/challenges/us-states-challenge/west-pacific");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'or' value:", error);
    }
  };

  const constUpdateTableCa = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ca: ca,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/west-pacific");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ca' value:", error);
    }
  };

  const constUpdateTableAk = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ak: ak,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/west-pacific");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ak' value:", error);
    }
  };

  const constUpdateTableHi = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        hi: hi,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/west-pacific");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'hi' value:", error);
    }
  };

  useEffect(() => {
    if (wa) {
      constUpdateTableWa();
    }
  }, [wa]);

  useEffect(() => {
    if (or) {
      constUpdateTableOr();
    }
  }, [or]);

  useEffect(() => {
    if (ca) {
      constUpdateTableCa();
    }
  }, [ca]);

  useEffect(() => {
    if (ak) {
      constUpdateTableAk();
    }
  }, [ak]);

  useEffect(() => {
    if (hi) {
      constUpdateTableHi();
    }
  }, [hi]);

  return (
    <>
      <AuthenticatedHeader />
      <ChallengeBanner
        image={usMapImage}
        text="Map of the usa with key landmarks on top of the map."
        header="The Pacific West"
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

export default USAPacific;
