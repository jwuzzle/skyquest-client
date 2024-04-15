import { useState, useEffect } from "react";
import axios from "axios";
import Challenges from "../../components/Homepage/ChallengesBanner/ChallengesBanner";
import Card from "../../components/Homepage/Card/FlightCard";
import flightChallenge from "../../assets/images/home_challenges.jpg";
import AuthenticatedHeader from "../../components/Header/AuthenticatedHeader";
import "./Homepage.scss";
import { jwtDecode } from "jwt-decode";
import planeTicket from "../../assets/images/plane_ticket.jpg";
import SliderCards from "../../components/Slider/SliderCards";
import globe from "../../assets/images/globe.jpg";
import Signout from "../../components/Signout/Signout";
import worldLocationImg from "../../assets/images/world_location.jpg"
import gateImg from "../../assets/images/gate_icon.jpg"

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem("JWTtoken");
  let decoded = null;
  if (token) {
    decoded = jwtDecode(token);
    console.log(decoded);
  }
  /*  const decoded = jwtDecode(token); */

  useEffect(() => {
    if (!token) {
      return;
    } else {
      setIsLoading(false);
    }
  }, [token]);

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
              <div className="home__signout">
                <Signout />
              </div>
              <div className="home__features--flights">
                <img src={globe} className="home__features--image mobile" />
                <Card
                  header="Your Miles, Your Way."
                  subheader="Search Flights Across Airlines!"
                  subheader_two="Journey with Your Miles!"
                  button="Find flights"
                  image={planeTicket}
                />
                <img src={globe} className="home__features--image desktop" />
              </div>
            </section>
            <section className="home__features">
              <h3 className="home__features--challenge-header">Challenges</h3>
              <div className="home__features--cards">
                <Challenges
                  title="50 States Quest"
                  description="Conquer the 50 States! Explore all U.S. states and D.C. for rewards."
                  url="/challenges/us-states-challenge"
                  buttonlabel="Let's Go!"
                  image={flightChallenge}
                />
                <Challenges
                  title="The Amazing Race"
                  description="Embark on a global adventure and visit every continent to unlock exciting rewards and experiences!"
                  url="/challenges/the-amazing-race"
                  buttonlabel="Explore!"
                  image={worldLocationImg}
                />
                <Challenges
                  title="Wonders of the World"
                  description="Take on a thrilling quest to witness the wonders of the world firsthand, unlocking unforgettable experiences along the way!"
                  url="/challenges/the-amazing-race"
                  buttonlabel="Explore!"
                  image={gateImg}
                />
              </div>
            </section>
            <section className="home__destinations">
              <SliderCards />
            </section>
          </section>
        )}
      </div>
    </>
  );
};

export default Homepage;
