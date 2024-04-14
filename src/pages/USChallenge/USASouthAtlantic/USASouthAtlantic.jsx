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

const USASouthAtlantic = () => {
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
  const [md, setMd] = useState(false);
  const [de, setDe] = useState(false);
  const [wv, setWv] = useState(false);
  const [va, setVa] = useState(false);
  const [dc, setDc] = useState(false);
  const [nc, setNc] = useState(false);
  const [sc, setSc] = useState(false);
  const [ga, setGa] = useState(false);
  const [fl, setFl] = useState(false);

  const handleMdClick = async (event) => {
    setMd(true);
  };

  const handleDeClick = async (event) => {
    setDe(true);
  };

  const handleWvClick = async (event) => {
    setWv(true);
  };

  const handleVaClick = async (event) => {
    setVa(true);
  };

  const handleDcClick = async (event) => {
    setDc(true);
  };

  const handleNcClick = async (event) => {
    setNc(true);
  };

  const handleScClick = async (event) => {
    setSc(true);
  };

  const handleGaClick = async (event) => {
    setGa(true);
  };

  const handleFlClick = async (event) => {
    setFl(true);
  };

  const constUpdateTableMd = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        md: md,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'md' value:", error);
    }
  };

  const constUpdateTableDe = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        de: de,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'de' value:", error);
    }
  };

  const constUpdateTableDc = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        dc: dc,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'dc' value:", error);
    }
  };

  const constUpdateTableVa = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        va: va,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'va' value:", error);
    }
  };

  const constUpdateTableWv = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        wv: wv,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'wv' value:", error);
    }
  };

  const constUpdateTableNc = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        nc: nc,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'nc' value:", error);
    }
  };

  const constUpdateTableSc = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        sc: sc,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'sc' value:", error);
    }
  };

  const constUpdateTableGa = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ga: ga,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ga' value:", error);
    }
  };

  const constUpdateTableFl = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        fl: fl,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/south-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'fl' value:", error);
    }
  };

  useEffect(() => {
    if (md) {
      constUpdateTableMd();
    }
  }, [md]);

  useEffect(() => {
    if (de) {
      constUpdateTableDe();
    }
  }, [de]);

  useEffect(() => {
    if (dc) {
      constUpdateTableDc();
    }
  }, [dc]);

  useEffect(() => {
    if (va) {
      constUpdateTableVa();
    }
  }, [va]);

  useEffect(() => {
    if (wv) {
      constUpdateTableWv();
    }
  }, [wv]);

  useEffect(() => {
    if (nc) {
      constUpdateTableNc();
    }
  }, [nc]);

  useEffect(() => {
    if (sc) {
      constUpdateTableSc();
    }
  }, [sc]);

  useEffect(() => {
    if (ga) {
      constUpdateTableGa();
    }
  }, [ga]);

  useEffect(() => {
    if (fl) {
      constUpdateTableFl();
    }
  }, [fl]);

  return (
    <>
      <AuthenticatedHeader />
      <ChallengeBanner
        image={usMapImage}
        text="Map of the usa with key landmarks on top of the map."
        header="The South Atlantic"
      />
      <Description description="Embark on an exciting journey through the dynamic South Atlantic region, from Maryland to Florida. Discover rich history, diverse culture, and scenic wonders as you conquer each state and earn rewards along the way. Join the adventure and explore the vibrant charm of the South Atlantic!" />
      <div className="state-cards">
        <StateCounter
          state={statesData[20].state}
          state_code={statesData[20].state_code}
          description={statesData[20].state_description}
          visited={visitedDetails[0]?.md === 0 ? "0" : "1"}
          onButtonClick={handleMdClick}
          image={statesData[20].image}
        />
        <StateCounter
          state={statesData[7].state}
          state_code={statesData[7].state_code}
          description={statesData[7].state_description}
          visited={visitedDetails[0]?.de === 0 ? "0" : "1"}
          onButtonClick={handleDeClick}
          image={statesData[7].image}
        />
        <StateCounter
          state={statesData[8].state}
          state_code={statesData[8].state_code}
          description={statesData[8].state_description}
          visited={visitedDetails[0]?.dc === 0 ? "0" : "1"}
          onButtonClick={handleDcClick}
          image={statesData[8].image}
        />
        <StateCounter
          state={statesData[46].state}
          state_code={statesData[46].state_code}
          description={statesData[46].state_description}
          visited={visitedDetails[0]?.va === 0 ? "0" : "1"}
          onButtonClick={handleVaClick}
          image={statesData[46].image}
        />
        <StateCounter
          state={statesData[48].state}
          state_code={statesData[48].state_code}
          description={statesData[48].state_description}
          visited={visitedDetails[0]?.wv === 0 ? "0" : "1"}
          onButtonClick={handleWvClick}
          image={statesData[48].image}
        />
        <StateCounter
          state={statesData[33].state}
          state_code={statesData[33].state_code}
          description={statesData[33].state_description}
          visited={visitedDetails[0]?.nc === 0 ? "0" : "1"}
          onButtonClick={handleNcClick}
          image={statesData[33].image}
        />
        <StateCounter
          state={statesData[40].state}
          state_code={statesData[40].state_code}
          description={statesData[40].state_description}
          visited={visitedDetails[0]?.sc === 0 ? "0" : "1"}
          onButtonClick={handleScClick}
          image={statesData[40].image}
        />
        <StateCounter
          state={statesData[10].state}
          state_code={statesData[10].state_code}
          description={statesData[10].state_description}
          visited={visitedDetails[0]?.ga === 0 ? "0" : "1"}
          onButtonClick={handleGaClick}
          image={statesData[10].image}
        />
        <StateCounter
          state={statesData[9].state}
          state_code={statesData[9].state_code}
          description={statesData[9].state_description}
          visited={visitedDetails[0]?.fl === 0 ? "0" : "1"}
          onButtonClick={handleFlClick}
          image={statesData[9].image}
        />
      </div>
    </>
  );
};

export default USASouthAtlantic;
