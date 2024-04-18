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

const USAMidwestWest = () => {
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

  const [nd, setNd] = useState(false);
  const handleNdClick = async (event) => {
    setNd(true);
  };
  useEffect(() => {
    if (nd) {
      constUpdateTableNd();
    }
  }, [nd]);

  const constUpdateTableNd = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        nd: nd,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/midwest-west");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'nd' value:", error);
    }
  };

  const [sd, setSd] = useState(false);
  const handleSdClick = async (event) => {
    setSd(true);
  };
  useEffect(() => {
    if (sd) {
      constUpdateTableSd();
    }
  }, [sd]);

  const constUpdateTableSd = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        sd: sd,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/midwest-west");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'sd' value:", error);
    }
  };

  const [ne, setNe] = useState(false);
  const handleNeClick = async (event) => {
    setNe(true);
  };
  useEffect(() => {
    if (ne) {
      constUpdateTableNe();
    }
  }, [ne]);

  const constUpdateTableNe = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ne: ne,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/midwest-west");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ne' value:", error);
    }
  };

  const [ks, setKs] = useState(false);
  const handleKsClick = async (event) => {
    setKs(true);
  };
  useEffect(() => {
    if (ks) {
      constUpdateTableKs();
    }
  }, [ks]);
  const constUpdateTableKs = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ks: ks,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/midwest-west");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ks' value:", error);
    }
  };

  const [ia, setIa] = useState(false);

  const handleIaClick = async (event) => {
    setIa(true);

    useEffect(() => {
      if (ia) {
        constUpdateTableIa();
      }
    }, [ia]);
  };

  const constUpdateTableIa = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        ia: ia,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/midwest-west");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'ia' value:", error);
    }
  };

  const [mn, setMn] = useState(false);

  const handleMnClick = async (event) => {
    setMn(true);

    useEffect(() => {
      if (mn) {
        constUpdateTableMn();
      }
    }, [mn]);
  };

  const constUpdateTableMn = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        mn: mn,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/midwest-west");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'mn' value:", error);
    }
  };

  const [mo, setMo] = useState(false);

  const handleMoClick = async (event) => {
    setMo(true);

    useEffect(() => {
      if (mo) {
        constUpdateTableMo();
      }
    }, [mo]);
  };

  const constUpdateTableMo = async () => {
    try {
      await axios.put(`${URL}/us-states-challenge/${decoded.id}`, {
        mo: mo,
      });
      alert("Another one checked off the list");
      navigate("/challenges/us-states-challenge/midwest-west");
      window.location.reload();
    } catch (error) {
      console.error("Error updating 'mo' value:", error);
    }
  };

  return (
    <>
      <AuthenticatedHeader />
      <ChallengeBanner
        image={usMapImage}
        text="Map of the usa with key landmarks on top of the map."
        header="The Midwest West"
        url="/challenges/us-states-challenge/"
      />
      <Description description="Embark on an expansive expedition through the vast and diverse Midwest West, spanning the sweeping plains and rolling prairies of South Dakota, North Dakota, Nebraska, Kansas, Minnesota, Iowa, and Missouri. Delve into a mosaic of landscapes, from the rugged Badlands to the fertile farmlands, and the bustling cities to the quaint rural communities. Immerse yourself in the rich tapestry of Midwestern culture, history, and hospitality as you journey through this captivating region. Prepare for an adventure filled with exploration, discovery, and the timeless charm of the Midwest West's boundless spirit!" />
      <div className="state-cards">
        <StateCounter
          state={statesData[34].state}
          state_code={statesData[34].state_code}
          description={statesData[34].state_description}
          visited={visitedDetails[0]?.nd === 0 ? "0" : "1"}
          onButtonClick={handleNdClick}
          image={statesData[34].image}
        />
        <StateCounter
          state={statesData[41].state}
          state_code={statesData[41].state_code}
          description={statesData[41].state_description}
          visited={visitedDetails[0]?.sd === 0 ? "0" : "1"}
          onButtonClick={handleSdClick}
          image={statesData[41].image}
        />
         <StateCounter
          state={statesData[27].state}
          state_code={statesData[27].state_code}
          description={statesData[27].state_description}
          visited={visitedDetails[0]?.ne === 0 ? "0" : "1"}
          onButtonClick={handleNeClick}
          image={statesData[27].image}
        />
        <StateCounter
          state={statesData[16].state}
          state_code={statesData[16].state_code}
          description={statesData[16].state_description}
          visited={visitedDetails[0]?.ks === 0 ? "0" : "1"}
          onButtonClick={handleKsClick}
          image={statesData[16].image}
        />
        <StateCounter
          state={statesData[15].state}
          state_code={statesData[15].state_code}
          description={statesData[15].state_description}
          visited={visitedDetails[0]?.ia === 0 ? "0" : "1"}
          onButtonClick={handleIaClick}
          image={statesData[15].image}
        />
        <StateCounter
          state={statesData[23].state}
          state_code={statesData[23].state_code}
          description={statesData[23].state_description}
          visited={visitedDetails[0]?.mn === 0 ? "0" : "1"}
          onButtonClick={handleMnClick}
          image={statesData[23].image}
        />
        <StateCounter
          state={statesData[25].state}
          state_code={statesData[25].state_code}
          description={statesData[25].state_description}
          visited={visitedDetails[0]?.mo === 0 ? "0" : "1"}
          onButtonClick={handleMoClick}
          image={statesData[25].image}
        />
      </div>
    </>
  );
};

export default USAMidwestWest;
