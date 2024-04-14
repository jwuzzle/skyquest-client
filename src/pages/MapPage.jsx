import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StateCounter from "../components/Tracker/StateCounterCard";
import axios from "axios";
import "../pages/USChallenge/Map.scss";
import usMapImage from "../assets/images/usa-elements-paper-map.jpg";
import ChallengeBanner from "../components/Banners/ChallengeBanner";
import AuthenticatedHeader from "../components/Header/AuthenticatedHeader";
import { jwtDecode } from "jwt-decode";
import statesData from "../data/states.json";
import Description from "../components/TextComponents/Descriptions/Description"

const URL = import.meta.env.VITE_APP_BASE_URL;

const Map = () => {
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
      console.log(visitedDetails[0].az);
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
  const [al, setAl] = useState(false);
  const [ak, setAk] = useState(false);
  const [az, setAz] = useState(false);
  const [ar, setAr] = useState(false);
  const [ca, setCa] = useState(false);
  const [co, setCo] = useState(false);
  const [ct, setCt] = useState(false);
  const [de, setDe] = useState(false);
  const [dc, setDc] = useState(false);
  const [fl, setFl] = useState(false);

  const handleAlClick = async (event) => {
    setAl(true);
  };

  const handleAkClick = async (event) => {
    setAk(true);
  };

  const handleAzClick = async (event) => {
    setAz(true);
  };

  const handleArClick = async (event) => {
    setAr(true);
  };

  const handleCaClick = async (event) => {
    setCa(true);
  };

  const handleCoClick = async (event) => {
    setCo(true);
  };
  const handleCtClick = async (event) => {
    setCt(true);
  };

  const handleDeClick = async (event) => {
    setDe(true);
  };

  const handleDcClick = async (event) => {
    setDc(true);
  };

  const handleFlClick = async (event) => {
    setFl(true);
  };

  const constUpdateTableAl = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        al: al,
      });
      alert("Another one checked off the list");
      navigate("/us-states-challenge");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'al' value:", error);
    }
  };

  const constUpdateTableAk = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ak: ak,
      });
      alert("Another one checked off the list");
      navigate("/us-states-challenge");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ak' value:", error);
    }
  };

  const constUpdateTableAz = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        az: az,
      });
      alert("Another one checked off the list");
      navigate("/us-states-challenge");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'az' value:", error);
    }
  };

  const constUpdateTableAr = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ar: ar,
      });
      alert("Another one checked off the list");
      navigate("/us-states-challenge");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ar' value:", error);
    }
  };

  const constUpdateTableCa = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ca: ca,
      });
      alert("Another one checked off the list");
      navigate("/us-states-challenge");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ca' value:", error);
    }
  };

  const constUpdateTableCo = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        co: co,
      });
      alert("Another one checked off the list");
      navigate("/us-states-challenge");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'co' value:", error);
    }
  };

  const constUpdateTableCt = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ct: ct,
      });
      alert("Another one checked off the list");
      navigate("/us-states-challenge");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ct' value:", error);
    }
  };

  const constUpdateTableDe = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        de: de,
      });
      alert("Another one checked off the list");
      navigate("/us-states-challenge");
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
      navigate("/us-states-challenge");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'dc' value:", error);
    }
  };

  const constUpdateTableFl = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        fl: fl,
      });
      alert("Another one checked off the list");
      navigate("/us-states-challenge");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'fl' value:", error);
    }
  };

  useEffect(() => {
    if (al) {
      constUpdateTableAl();
    }
  }, [al]);

  useEffect(() => {
    if (ak) {
      constUpdateTableAk();
    }
  }, [ak]);

  useEffect(() => {
    if (az) {
      constUpdateTableAz();
    }
  }, [az]);

  useEffect(() => {
    if (ar) {
      constUpdateTableAr();
    }
  }, [ar]);

  useEffect(() => {
    if (ca) {
      constUpdateTableCa();
    }
  }, [ca]);

  useEffect(() => {
    if (co) {
      constUpdateTableCo();
    }
  }, [co]);

  useEffect(() => {
    if (ct) {
      constUpdateTableCt();
    }
  }, [ct]);

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
        header="Explore the United States Challenge"
      />
      <Description description="Embark on a journey across the United States and explore the rich tapestry of each state's culture, history, and natural wonders. From the majestic Grand Canyon to the vibrant streets of New York City, there's endless adventure awaiting you. As you explore each state, come back here and mark it off the list by clicking on the cards below. Once you've explored all of the US, you'll earn extra reward miles! Get ready to discover the beauty and diversity of America's states in this thrilling challenge!" />
      <div className="state-cards">
        <StateCounter
          state={statesData[0].state}
          state_code={statesData[0].state_code}
          description={statesData[0].state_description}
          visited={visitedDetails[0]?.al === 0 ? "0" : "1"}
          onButtonClick={handleAlClick}
          image={statesData[0].image}
        />
        <StateCounter
          state={statesData[1].state}
          state_code={statesData[1].state_code}
          description={statesData[1].state_description}
          visited={visitedDetails[0]?.ak === 0 ? "0" : "1"}
          onButtonClick={handleAkClick}
          image={statesData[1].image}
        />
        <StateCounter
          state={statesData[2].state}
          state_code={statesData[2].state_code}
          description={statesData[2].state_description}
          visited={visitedDetails[0]?.az === 0 ? "0" : "1"}
          onButtonClick={handleAzClick}
          image={statesData[2].image}
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
          state={statesData[4].state}
          state_code={statesData[4].state_code}
          description={statesData[4].state_description}
          visited={visitedDetails[0]?.ca === 0 ? "0" : "1"}
          onButtonClick={handleCaClick}
          image={statesData[4].image}
        />
        <StateCounter
          state={statesData[5].state}
          state_code={statesData[5].state_code}
          description={statesData[5].state_description}
          visited={visitedDetails[0]?.co === 0 ? "0" : "1"}
          onButtonClick={handleCoClick}
          image={statesData[5].image}
        />
        <StateCounter
          state={statesData[6].state}
          state_code={statesData[6].state_code}
          description={statesData[6].state_description}
          visited={visitedDetails[0]?.ct === 0 ? "0" : "1"}
          onButtonClick={handleCtClick}
          image={statesData[6].image}
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

export default Map;
