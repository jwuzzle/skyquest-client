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

const USAMountainWest = () => {
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
  const [nm, setNm] = useState(false);
  const [az, setAz] = useState(false);
  const [co, setCo] = useState(false);
  const [ut, setUt] = useState(false);
  const [nv, setNv] = useState(false);
  const [wy, setWy] = useState(false);
  const [id, setId] = useState(false);
  const [mt, setMt] = useState(false);

  const handleNmClick = async (event) => {
    setNm(true);
  };

  const handleAzClick = async (event) => {
    setAz(true);
  };

  const handleCoClick = async (event) => {
    setCo(true);
  };

  const handleUtClick = async (event) => {
    setUt(true);
  };

  const handleNvClick = async (event) => {
    setNv(true);
  };

  const handleWyClick = async (event) => {
    setWy(true);
  };

  const handleIdClick = async (event) => {
    setId(true);
  };

  const handleMtClick = async (event) => {
    setMt(true);
  };


  const constUpdateTableNm = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        nm: nm,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/west-mountain");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'nm' value:", error);
    }
  };

  const constUpdateTableAz = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        az: az,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/west-mountain");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'az' value:", error);
    }
  };

  const constUpdateTableCo = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        co: co,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/west-mountain");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'co' value:", error);
    }
  };

  const constUpdateTableUt = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ut: ut,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/west-mountain");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ut' value:", error);
    }
  };

  const constUpdateTableNv = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        nv: nv,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/west-mountain");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'nv' value:", error);
    }
  };

  const constUpdateTableWy = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        wy: wy,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/west-mountain");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'wy' value:", error);
    }
  };

  const constUpdateTableId = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        id: id,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/west-mountain");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'id' value:", error);
    }
  };

  const constUpdateTableMt = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        mt: mt,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/west-mountain");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'mt' value:", error);
    }
  };



  useEffect(() => {
    if (nm) {
      constUpdateTableNm();
    }
  }, [nm]);

  useEffect(() => {
    if (az) {
      constUpdateTableAz();
    }
  }, [az]);

  useEffect(() => {
    if (co) {
      constUpdateTableCo();
    }
  }, [co]);

  useEffect(() => {
    if (ut) {
      constUpdateTableUt();
    }
  }, [ut]);

  useEffect(() => {
    if (nv) {
      constUpdateTableNv();
    }
  }, [nv]);

  useEffect(() => {
    if (wy) {
      constUpdateTableWy();
    }
  }, [wy]);

  useEffect(() => {
    if (id) {
      constUpdateTableId();
    }
  }, [id]);

  useEffect(() => {
    if (mt) {
      constUpdateTableMt();
    }
  }, [mt]);

  return (
    <>
      <AuthenticatedHeader />
      <ChallengeBanner
        image={usMapImage}
        text="Map of the usa with key landmarks on top of the map."
        header="The Mountain West"
        url="/challenges/us-states-challenge/"
      />
      <Description description="Embark on an exhilarating expedition through the majestic Mountain West region, spanning the rugged landscapes and vibrant cultures of Arizona, Colorado, Utah, New Mexico, Nevada, Wyoming, Idaho, and Montana. Traverse towering mountain ranges, vast deserts, and pristine wilderness, immersing yourself in the awe-inspiring beauty of the American West. From the iconic red rock formations of Arizona to the snow-capped peaks of the Rocky Mountains, each state offers a wealth of outdoor adventures, cultural treasures, and breathtaking vistas. Prepare for an unforgettable journey filled with exploration, discovery, and the timeless allure of the Mountain West's boundless spirit!" />
      <div className="state-cards">
        <StateCounter
          state={statesData[31].state}
          state_code={statesData[31].state_code}
          description={statesData[31].state_description}
          visited={visitedDetails[0]?.nm === 0 ? "0" : "1"}
          onButtonClick={handleNmClick}
          image={statesData[31].image}
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
          state={statesData[5].state}
          state_code={statesData[5].state_code}
          description={statesData[5].state_description}
          visited={visitedDetails[0]?.co === 0 ? "0" : "1"}
          onButtonClick={handleCoClick}
          image={statesData[5].image}
        />
        <StateCounter
          state={statesData[44].state}
          state_code={statesData[44].state_code}
          description={statesData[44].state_description}
          visited={visitedDetails[0]?.ut === 0 ? "0" : "1"}
          onButtonClick={handleUtClick}
          image={statesData[44].image}
        />
        <StateCounter
          state={statesData[28].state}
          state_code={statesData[28].state_code}
          description={statesData[28].state_description}
          visited={visitedDetails[0]?.nv === 0 ? "0" : "1"}
          onButtonClick={handleNvClick}
          image={statesData[28].image}
        />
        <StateCounter
          state={statesData[50].state}
          state_code={statesData[50].state_code}
          description={statesData[50].state_description}
          visited={visitedDetails[0]?.wy === 0 ? "0" : "1"}
          onButtonClick={handleWyClick}
          image={statesData[50].image}
        />
        <StateCounter
          state={statesData[12].state}
          state_code={statesData[12].state_code}
          description={statesData[12].state_description}
          visited={visitedDetails[0]?.id === 0 ? "0" : "1"}
          onButtonClick={handleIdClick}
          image={statesData[12].image}
        />
        <StateCounter
          state={statesData[26].state}
          state_code={statesData[26].state_code}
          description={statesData[26].state_description}
          visited={visitedDetails[0]?.mt === 0 ? "0" : "1"}
          onButtonClick={handleMtClick}
          image={statesData[26].image}
        />
      </div>
    </>
  );
};

export default USAMountainWest;
