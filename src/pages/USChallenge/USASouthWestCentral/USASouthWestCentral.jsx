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

const USASouthWestCentral = () => {
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
  const [tx, setTx] = useState(false);
  const [ok, setOk] = useState(false);
  const [ar, setAr] = useState(false);
  const [la, setLa] = useState(false);

  const handleTxClick = async (event) => {
    setTx(true);
  };

  const handleOkClick = async (event) => {
    setOk(true);
  };

  const handleArClick = async (event) => {
    setAr(true);
  };

  const handleLaClick = async (event) => {
    setLa(true);
  };

  const constUpdateTableTx = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        tx: tx,
      });
      alert("Way to go! Another one checked off the list.");
      navigate("/challenges/us-states-challenge/south-west-central");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'tx' value:", error);
    }
  };

  const constUpdateTableOk = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ok: ok,
      });
      alert("Way to go! Another one checked off the list.");
      navigate("/challenges/us-states-challenge/south-west-central");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ok' value:", error);
    }
  };

  const constUpdateTableAr = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ar: ar,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-west-central");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ar' value:", error);
    }
  };

  const constUpdateTableLa = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        la: la,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-west-central");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'la' value:", error);
    }
  };

  useEffect(() => {
    if (tx) {
      constUpdateTableTx();
    }
  }, [tx]);

  useEffect(() => {
    if (ok) {
      constUpdateTableOk();
    }
  }, [ok]);

  useEffect(() => {
    if (ar) {
      constUpdateTableAr();
    }
  }, [ar]);

  useEffect(() => {
    if (la) {
      constUpdateTableLa();
    }
  }, [la]);

  return (
    <>
      <AuthenticatedHeader />
      <ChallengeBanner
        image={usMapImage}
        text="Map of the usa with key landmarks on top of the map."
        header="The South West Central"
        url="/challenges/us-states-challenge/"
      />
      <Description description="Embark on an immersive expedition through the captivating South West Central region, encompassing the diverse landscapes and vibrant cultures of Arkansas, Louisiana, Oklahoma, and Texas. Journey through sprawling prairies, dense forests, and rolling hills, and delve into the rich tapestry of Southern hospitality, music, and cuisine. From the bustling streets of Dallas and Houston to the tranquil bayous of Louisiana, each destination offers a unique blend of history, charm, and adventure. Prepare for an unforgettable experience filled with exploration, discovery, and the irresistible allure of the South West Central's dynamic spirit!" />
      <div className="state-cards">
        <StateCounter
          state={statesData[43].state}
          state_code={statesData[43].state_code}
          description={statesData[43].state_description}
          visited={visitedDetails[0]?.tx === 0 ? "0" : "1"}
          onButtonClick={handleTxClick}
          image={statesData[43].image}
        />
        <StateCounter
          state={statesData[36].state}
          state_code={statesData[36].state_code}
          description={statesData[36].state_description}
          visited={visitedDetails[0]?.ok === 0 ? "0" : "1"}
          onButtonClick={handleOkClick}
          image={statesData[36].image}
        />
        <StateCounter
          state={statesData[3].state}
          state_code={statesData[3].state_code}
          description={statesData[3].state_description}
          visited={visitedDetails[0]?.ar === 0 ? "0" : "1"}
          onButtonClick={handleArClick}
          image={statesData[3].image}
        />
        <StateCounter
          state={statesData[18].state}
          state_code={statesData[18].state_code}
          description={statesData[18].state_description}
          visited={visitedDetails[0]?.la === 0 ? "0" : "1"}
          onButtonClick={handleLaClick}
          image={statesData[18].image}
        />
      </div>
    </>
  );
};

export default USASouthWestCentral;
