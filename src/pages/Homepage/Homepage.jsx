import { useState, useEffect } from "react";
import axios from "axios";
import Challenges from '../../components/ChallengesBanner/ChallengesBanner'
import globe from '../../assets/images/globe.jpg'
import './Homepage.scss'

const baseURL = "http://localhost:8080";
const homepageURL = `${baseURL}/home`;

const challengeData = [
    {
        "challengeID": 1, 
        "title": "50 States Quest",
        "description": "Conquer the 50 States! Explore all U.S. states and D.C. for rewards.",

    }
]

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const token = sessionStorage.getItem("JWTtoken");

  useEffect(() => {
    if (!token) {
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(homepageURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsLoading(false);
        setUserInfo({ name: response.data.name });
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProfile();
  }, [token]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="home">
          <h1 className="home__welcome">Welcome {userInfo.name}!</h1>
          <section className="home__features">
          <h3 className="challenge__header">Challenges</h3>
          <div className="home__features--cards">
          <Challenges  
          title="50 States Quest"
          description="Conquer the 50 States! Explore all U.S. states and D.C. for rewards."
          url="/us-states-challenge"
          buttonlabel="Let's Go!"
          image={globe}
          />
          <Challenges  
          title="Wonders Expedition"
          description="Conquer the 7 Wonders! Visit, track, and unlock rewards."
          url="/7-wonders-challenge"
          buttonlabel="Explore Wonders"
          image={globe}
          />
          <Challenges  
          title="Continents Adventure"
          description="Visit Every Continent, Unlock Rewards! (bonus points for Antarctica)"
          url="/continents-challenge"
          buttonlabel="Start Exploring"
          image={globe}
          />
          </div>
          </section>
        </section>
      )}
    </div>
  );
};

export default Homepage;
