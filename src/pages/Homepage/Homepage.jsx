import { useState, useEffect } from "react";
import Challenges from "../../components/Homepage/ChallengesBanner/ChallengesBanner";
import AuthenticatedHeader from "../../components/Header/AuthenticatedHeader";
import "./Homepage.scss";
import { jwtDecode } from "jwt-decode";
import SliderCards from "../../components/Slider/SliderCards";
import Signout from "../../components/Signout/Signout";
import greatwall from "../../assets/images/greatwall.png" 
import worldLocationImg from "../../assets/images/amazingglobe.png"
import BoardingPass from "../../components/BoardingPass/BoardingPass";
import UsChallengeImg from "../../assets/images/usa.png"
import "ldrs/grid";

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
          <div className="loading">
          <h1>Loading...</h1>
          <l-grid size="60" color="#26DDF9"></l-grid>
          </div>
        ) : (
          <section className="home">
            <section className="home__header">
              <h1 className="home__welcome">Welcome, {decoded.firstname}!</h1>
              <div className="home__signout">
                <Signout />
              </div>
              </section>
              <section className="home__features--flights">
              <BoardingPass 
              name={decoded.firstname}/>
              </section>
            <section className="home__features">
              <h3 className="home__features--challenge-header">Challenges</h3>
              <div className="home__features--cards">
                <Challenges
                  title="50 States Quest"
                  description="Conquer the 50 States! Explore all U.S. states and D.C. for rewards."
                  url="/challenges/us-states-challenge"
                  buttonlabel="Let's Go!"
                  image={UsChallengeImg}
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
                  image={greatwall}
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
