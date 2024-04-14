import heroBanner from "../../assets/images/challenges_hero.jpg";
import usaChallengeImage from "../../assets/images/usa_challenge.png";
import amazingRaceImage from "../../assets/images/amazing_race.jpg"
import { Link } from "react-router-dom";
import AuthenticatedHeader from "../../components/Header/AuthenticatedHeader";
import Description from "../../components/TextComponents/Descriptions/Description"
import "./ChallengesHome.scss";

const ChallengesHome = () => {
  return (
    <main className="challenges">
      <AuthenticatedHeader />
      <section className="challenges__hero-banner">
        <img
          className="challenges__hero-image"
          src={heroBanner}
          alt="location with phone and map"
        />
        <h3 className="challenges__hero-text">Travel Challenges</h3>
        </section>
<Description 
description="Embark on exciting travel challenges and explore the world while
earning rewards every step of the way! From conquering every U.S.
state to marveling at wonders across continents, the fun challenges
make globe-trotting a rewarding adventure." />
        {/* <p className="challenges__hero-description">
          Embark on exciting travel challenges and explore the world while
          earning rewards every step of the way! From conquering every U.S.
          state to marveling at wonders across continents, the fun challenges
          make globe-trotting a rewarding adventure.
        </p> */} 
     
      <section className="challenges__cards">
        <div className="challenges__cards--content">
          <div className="challenge__image-container yellow">
            <img
              className="challenge__image"
              src={usaChallengeImage}
              alt="location with phone and map"
            />
          </div>
          <p className="challenge__name">
            Cross-Country Adventure: Discovering America
          </p>
          <p className="challenge__description">
            Embark on a thrilling journey through the heartland of America with
            our 'Cross-Country Adventure' challenge. Discover the diverse
            landscapes and vibrant cultures of each region as you journey across
            the United States, earning rewards along the way!
          </p>
          <Link
            className="challenge__button"
            to="/challenges/us-states-challenge"
          >
            Let's Go!
          </Link>
        </div>
        <div className="challenges__cards--content">
          <div className="challenge__image-container blue">
            <img
              className="challenge__image amazing-race__image"
              src={amazingRaceImage}
              alt="location with phone and map"
            />
          </div>
          <p className="challenge__name">
            The Amazing Race
          </p>
          <p className="challenge__description">
            Join 'The Amazing Race' challenge and traverse continents! Explore
            diverse cultures and landscapes, visiting one country in each
            (excluding Antarctica), to unlock thrilling rewards along your
            global journey!
          </p>
          <Link
            className="challenge__button"
            to="/challenges/the-amazing-race"
          >
            Ready, Set, Go!
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ChallengesHome;
