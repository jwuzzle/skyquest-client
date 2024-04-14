import { useState, useEffect } from "react";
import axios from "axios";
import Challenges from "../../components/Homepage/ChallengesBanner/ChallengesBanner";
import Card from "../../components/Homepage/Card/FlightCard";
import flightChallenge from "../../assets/images/home_challenges.jpg"
import AuthenticatedHeader from "../../components/Header/AuthenticatedHeader";
import "./Homepage.scss";
import { jwtDecode } from "jwt-decode";
import planeTicket from "../../assets/images/plane_ticket.jpg"
import SliderCards from "../../components/Slider/SliderCards";

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
                  subheader="Search Flights Across Airlines!" 
                  subheader_two="Journey with Your Miles!"
                  button="Find flights"
                  image={planeTicket}
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
                  image={flightChallenge}
                />
              </div>
            </section>
              <SliderCards />
          </section>
        )}
      </div>
    </>
  );
};

export default Homepage;
