import { useState, useEffect } from "react";
import axios from "axios";
import Challenges from "../../components/ChallengesBanner/ChallengesBanner";
import Card from "../../components/Homepage/Card/Card";
import globe from "../../assets/images/globe.jpg";
import AuthenticatedHeader from "../../components/Header/AuthenticatedHeader";
import "./Homepage.scss";
import { jwtDecode } from "jwt-decode";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem("JWTtoken");
  const decoded = jwtDecode(token);
  console.log(decoded)

  useEffect(() => {
    if (!token) {
      return;
    } else {
        setIsLoading(false);
  }}, [token]);

  return (
    <>
      <AuthenticatedHeader />
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <section className="home">
            <section className="home__top">
              <h1 className="home__welcome">Welcome, {decoded.firstname}!</h1>
              <div className="home__features--flights">
                <Card
                  header="Your Miles, Your Way."
                  subheader="Search Flights Across Airlines! Journey with Your Miles!"
                  button="Find flights"
                />
              </div>
            </section>
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
    </>
  );
};

export default Homepage;
