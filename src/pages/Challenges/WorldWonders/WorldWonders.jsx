import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import AuthenticatedHeader from "../../../components/Header/AuthenticatedHeader";
import { jwtDecode } from "jwt-decode";
import contientData from "../../../data/continents.json";
import "../../../components/Tracker/StateCounterCard.scss";
import ChallengeCard  from "../../../components/Tracker/ChallengeCard";
import amazingRaceImg from "../../../assets/images/amazing_race.jpg"
import Description from "../../../components/TextComponents/Descriptions/Description";
import "./AmazingRace.scss"

const URL = import.meta.env.VITE_APP_BASE_URL;

const WorldWonders = () => {

const navigate = useNavigate()
const token = sessionStorage.getItem("JWTtoken");
const decoded = jwtDecode(token);

const [visitedContinents, setVisitedContinents] = useState([]);

const fetchVisitedData = async () => {
  try {
    const response = await axios.get(
      `${URL}/continents/${decoded.id}`
    );
    console.log(response.data);
    setVisitedContinents(response.data);
  } catch (error) {
    console.error("Unable to get visited data:", error);
  }
};

useEffect(() => {
    fetchVisitedData();
}, []);

useEffect(() => {
  if (visitedWonders.length > 0) {
    console.log(visitedContinents[0].az);
  }
}, [visitedContinents]);

//North America
const [northAmerica, setNorthAmerica] = useState(false)
const handleNorthAmericaClick = async (event) => {
    setNorthAmerica(true);
}
const constUpdateTableNorthAmerica = async () => {
    try {
      await axios.put(`${URL}/continents/${decoded.id}`, {
        north_america: northAmerica,
      });
      alert("Good job! Another one checked off the list.");
      navigate("/challenges/the-amazing-race");
      window.location.reload();
    } catch (error) {
      console.error("Error updating North America", error)
    }
  }
useEffect(() => {
    if (northAmerica) {
        constUpdateTableNorthAmerica();}
  }, [northAmerica]);

//South America
const [southAmerica, setSouthAmerica] = useState(false)
const handleSouthAmericaClick = async (event) => {
    setSouthAmerica(true);
}
const constUpdateTableSouthAmerica = async () => {
    try {
      await axios.put(`${URL}/continents/${decoded.id}`, {
        south_america: southAmerica,
      });
      alert("Good job! Another one checked off the list.");
      navigate("/challenges/the-amazing-race");
      window.location.reload();
    } catch (error) {
      console.error("Error updating South America", error)
    }
  }
  useEffect(() => {
    if (southAmerica) {
        constUpdateTableSouthAmerica();}
  }, [southAmerica]);

//Europe
const [europe, setEurope] = useState(false)
const handleEuropeClick = async (event) => {
    setEurope(true);
}
const constUpdateTableEurope = async () => {
    try {
      await axios.put(`${URL}/continents/${decoded.id}`, {
        europe: europe,
      });
      alert("Good job! Another one checked off the list.");
      navigate("/challenges/the-amazing-race");
      window.location.reload();
    } catch (error) {
      console.error("Error updating Europe", error)
    }
  }
  useEffect(() => {
    if (europe) {
        constUpdateTableEurope();}
  }, [europe]);

//Asia
const [asia, setAsia] = useState(false)
const handleAsiaClick = async (event) => {
    setAsia(true);
}
const constUpdateTableAsia = async () => {
    try {
      await axios.put(`${URL}/continents/${decoded.id}`, {
        asia: asia,
      });
      alert("Good job! Another one checked off the list.");
      navigate("/challenges/the-amazing-race");
      window.location.reload();
    } catch (error) {
      console.error("Error updating Asia", error)
    }
  }
  useEffect(() => {
    if (asia) {
        constUpdateTableAsia();}
  }, [asia]);

//Africa
const [africa, setAfrica] = useState(false)
const handleAfricaClick = async (event) => {
    setAfrica(true);
}
const constUpdateTableAfrica = async () => {
    try {
      await axios.put(`${URL}/continents/${decoded.id}`, {
        africa: africa,
      });
      alert("Good job! Another one checked off the list.");
      navigate("/challenges/the-amazing-race");
      window.location.reload();
    } catch (error) {
      console.error("Error updating Africa", error)
    }
  }
  useEffect(() => {
    if (africa) {
        constUpdateTableAfrica();}
  }, [africa]);

//Australia
const [australia, setAustralia] = useState(false)
const handleAustraliaClick = async (event) => {
    setAustralia(true);
}
const constUpdateTableAustralia = async () => {
    try {
      await axios.put(`${URL}/continents/${decoded.id}`, {
        australia: australia,
      });
      alert("Good job! Another one checked off the list.");
      navigate("/challenges/the-amazing-race");
      window.location.reload();
    } catch (error) {
      console.error("Error updating Australia", error)
    }
  }
  useEffect(() => {
    if (australia) {
        constUpdateTableAustralia();}
  }, [australia]);


  
  return (
    <main>
        <AuthenticatedHeader />
      <section className="ar-challenge__banner">
        <img className="ar-challenge__image" src={amazingRaceImg} alt="map with historical landmarks"/>
        <Link className="ar-challenge__button" to="/challenges">
          Back
        </Link>
        <h3 className="ar-challenge__header">The Amazing Race</h3>
   </section>
      <Description description="Join 'The Amazing Race' challenge and embark on an extraordinary global adventure! Traverse the diverse continents of the world, from the bustling streets of Asia to the majestic landscapes of Africa and beyond. Explore the wonders of each continent, immerse yourself in unique cultures, and journey through captivating landscapes. Conquer 'The Amazing Race' by visiting at least one country in each continent (excluding Antarctica), and unlock a world of exhilarating rewards along your epic journey." />
      <section className="continent__cards">
        <ChallengeCard
          continent={contientData[0].continent}
          description={contientData[0].description}
          examples={contientData[0].examples}
          visited={visitedContinents[0]?.north_america === 0 ? "0" : "1"}
          onButtonClick={handleNorthAmericaClick}
          image={contientData[0].image}
        />
        <ChallengeCard
          continent={contientData[1].continent}
          description={contientData[1].description}
          xamples={contientData[1].examples}
          visited={visitedContinents[0]?.south_america === 0 ? "0" : "1"}
          onButtonClick={handleSouthAmericaClick}
          image={contientData[1].image}
        />
        <ChallengeCard
          continent={contientData[2].continent}
          description={contientData[2].description}
          xamples={contientData[2].examples}
          visited={visitedContinents[0]?.europe === 0 ? "0" : "1"}
          onButtonClick={handleEuropeClick}
          image={contientData[2].image}
        />
        <ChallengeCard
          continent={contientData[3].continent}
          description={contientData[3].description}
          xamples={contientData[3].examples}
          visited={visitedContinents[0]?.asia === 0 ? "0" : "1"}
          onButtonClick={handleAsiaClick}
          image={contientData[3].image}
        />
        <ChallengeCard
          continent={contientData[4].continent}
          description={contientData[4].description}
          xamples={contientData[4].examples}
          visited={visitedContinents[0]?.africa === 0 ? "0" : "1"}
          onButtonClick={handleAfricaClick}
          image={contientData[4].image}
        />
        <ChallengeCard
          continent={contientData[5].continent}
          description={contientData[5].description}
          xamples={contientData[5].examples}
          visited={visitedContinents[0]?.australia === 0 ? "0" : "1"}
          onButtonClick={handleAustraliaClick}
          image={contientData[5].image}
        />
        </section>
    </main>
  )
}

export default WorldWonders

