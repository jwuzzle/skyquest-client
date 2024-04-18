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

const USAMidwestEast = () => {
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

  const [oh, setOh] = useState(false);
  const handleOhClick = async (event) => {
    setOh(true);
  };
  useEffect(() => {
    if (oh) {
      constUpdateTableOh();
    }
  }, [oh]);

  const constUpdateTableOh = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        oh: oh,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/midwest-east");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'oh' value:", error);
    }
  };

  const [mi, setMi] = useState(false);
  const handleMiClick = async (event) => {
    setMi(true);
  };
  useEffect(() => {
    if (mi) {
      constUpdateTableMi();
    }
  }, [mi]);
  const constUpdateTableMi = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        mi: mi,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/midwest-east");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'mi' value:", error);
    }
  };

  const [ind, setInd] = useState(false);

  const handleIndClick = async (event) => {
    setInd(true);

    useEffect(() => {
      if (ind) {
        constUpdateTableInd();
      }
    }, [ind]);
  };

  const constUpdateTableInd = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        in: ind,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-mid-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'in' value:", error);
    }
  };

  const [il, setIl] = useState(false);

  const handleIlClick = async (event) => {
    setIl(true);

    useEffect(() => {
      if (il) {
        constUpdateTableIl();
      }
    }, [il]);
  };

  const constUpdateTableIl = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        il: il,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-mid-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'il' value:", error);
    }
  };

  const [wi, setWi] = useState(false);

  const handleWiClick = async (event) => {
    setWi(true);

    useEffect(() => {
      if (wi) {
        constUpdateTableWi();
      }
    }, [wi]);
  };

  const constUpdateTableWi = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        wi: wi,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/northeast-mid-atlantic");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'wi' value:", error);
    }
  };

  return (
    <>
      <AuthenticatedHeader />
      <ChallengeBanner
        image={usMapImage}
        text="Map of the usa with key landmarks on top of the map."
        header="The Midwest East"
        url="/challenges/us-states-challenge/"
      />
      <Description description="Embark on an unforgettable odyssey through the heartland of America in the Midwest East region, spanning the historic states of Ohio, Illinois, Wisconsin, Indiana, and Michigan. Traverse vast prairies, rolling hills, and Great Lakes shores as you unravel the rich tapestry of Midwestern heritage and culture. From the bustling metropolises of Chicago and Detroit to the quaint small towns steeped in tradition, each stop promises new encounters and cherished memories. Brace yourself for an expedition teeming with exploration, camaraderie, and the timeless charm of the Midwest East's enduring spirit!" />
      <div className="state-cards">
        <StateCounter
          state={statesData[35].state}
          state_code={statesData[35].state_code}
          description={statesData[35].state_description}
          visited={visitedDetails[0]?.oh === 0 ? "0" : "1"}
          onButtonClick={handleOhClick}
          image={statesData[35].image}
        />
        <StateCounter
          state={statesData[22].state}
          state_code={statesData[22].state_code}
          description={statesData[22].state_description}
          visited={visitedDetails[0]?.mi === 0 ? "0" : "1"}
          onButtonClick={handleMiClick}
          image={statesData[22].image}
        />
        <StateCounter
          state={statesData[14].state}
          state_code={statesData[14].state_code}
          description={statesData[14].state_description}
          visited={visitedDetails[0]?.in === 0 ? "0" : "1"}
          onButtonClick={handleIndClick}
          image={statesData[14].image}
        />
        <StateCounter
          state={statesData[13].state}
          state_code={statesData[13].state_code}
          description={statesData[13].state_description}
          visited={visitedDetails[0]?.il === 0 ? "0" : "1"}
          onButtonClick={handleIlClick}
          image={statesData[13].image}
        />
        <StateCounter
          state={statesData[49].state}
          state_code={statesData[49].state_code}
          description={statesData[49].state_description}
          visited={visitedDetails[0]?.wi === 0 ? "0" : "1"}
          onButtonClick={handleWiClick}
          image={statesData[49].image}
        />
      </div>
    </>
  );
};

export default USAMidwestEast;
