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

const USANewEngland = () => {
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
  const [me, setMe] = useState(false);
  const [vt, setVt] = useState(false);
  const [nh, setNh] = useState(false);
  const [ma, setMa] = useState(false);
  const [ri, setRi] = useState(false);
  const [ct, setCt] = useState(false);

  const handleMeClick = async (event) => {
    setMe(true);
  };

  const handleVtClick = async (event) => {
    setVt(true);
  };

  const handleNhClick = async (event) => {
    setNh(true);
  };

  const handleMaClick = async (event) => {
    setMa(true);
  };

  const handleRiClick = async (event) => {
    setRi(true);
  };

  const handleCtClick = async (event) => {
    setCt(true);
  };

  const constUpdateTableMe = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        me: me,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-new-england");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'me' value:", error);
    }
  };

  const constUpdateTableVt = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        vt: vt,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-new-england");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'vt' value:", error);
    }
  };

  const constUpdateTableNh = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        nh: nh,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-new-england");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'nh' value:", error);
    }
  };

  const constUpdateTableMa = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ma: ma,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-new-england");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ma' value:", error);
    }
  };

  const constUpdateTableRi = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ri: ri,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-new-england");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ri' value:", error);
    }
  };

  const constUpdateTableCt = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ct: ct,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-new-england");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ct' value:", error);
    }
  };

  useEffect(() => {
    if (me) {
      constUpdateTableMe();
    }
  }, [me]);

  useEffect(() => {
    if (vt) {
      constUpdateTableVt();
    }
  }, [vt]);

  useEffect(() => {
    if (nh) {
      constUpdateTableNh();
    }
  }, [nh]);

  useEffect(() => {
    if (ma) {
      constUpdateTableMa();
    }
  }, [ma]);

  useEffect(() => {
    if (ri) {
      constUpdateTableRi();
    }
  }, [ri]);

  useEffect(() => {
    if (ct) {
      constUpdateTableCt();
    }
  }, [ct]);

  return (
    <>
      <AuthenticatedHeader />
      <ChallengeBanner
        image={usMapImage}
        text="Map of the usa with key landmarks on top of the map."
        header="The Northeast New England"
        url="/challenges/us-states-challenge/"
      />
      <Description description="Embark on an exciting journey through Northeast New England, from Maine to Connecticut. Explore historic cities, scenic wonders, and earn rewards with each state you conquer. Join the adventure and uncover the diverse charm of Northeast New England!" />
      <div className="state-cards">
        <StateCounter
          state={statesData[19].state}
          state_code={statesData[19].state_code}
          description={statesData[19].state_description}
          visited={visitedDetails[0]?.me === 0 ? "0" : "1"}
          onButtonClick={handleMeClick}
          image={statesData[19].image}
        />
        <StateCounter
          state={statesData[45].state}
          state_code={statesData[45].state_code}
          description={statesData[45].state_description}
          visited={visitedDetails[0]?.vt === 0 ? "0" : "1"}
          onButtonClick={handleVtClick}
          image={statesData[45].image}
        />
        <StateCounter
          state={statesData[29].state}
          state_code={statesData[29].state_code}
          description={statesData[29].state_description}
          visited={visitedDetails[0]?.nh === 0 ? "0" : "1"}
          onButtonClick={handleNhClick}
          image={statesData[29].image}
        />
        <StateCounter
          state={statesData[21].state}
          state_code={statesData[21].state_code}
          description={statesData[21].state_description}
          visited={visitedDetails[0]?.ma === 0 ? "0" : "1"}
          onButtonClick={handleMaClick}
          image={statesData[21].image}
        />
        <StateCounter
          state={statesData[39].state}
          state_code={statesData[39].state_code}
          description={statesData[39].state_description}
          visited={visitedDetails[0]?.ri === 0 ? "0" : "1"}
          onButtonClick={handleRiClick}
          image={statesData[39].image}
        />
        <StateCounter
          state={statesData[6].state}
          state_code={statesData[6].state_code}
          description={statesData[6].state_description}
          visited={visitedDetails[0]?.ct === 0 ? "0" : "1"}
          onButtonClick={handleCtClick}
          image={statesData[6].image}
        />
      </div>
    </>
  );
};

export default USANewEngland;
