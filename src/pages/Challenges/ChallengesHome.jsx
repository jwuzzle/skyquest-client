import heroBanner from "../../assets/images/challenges_hero.jpg";
import usaChallengeImage from "../../assets/images/usa_challenge.png";
import amazingRaceImage from "../../assets/images/amazing_race.jpg";
import rome from "../../assets/images/rome.png"; 
import { Link } from "react-router-dom";
import AuthenticatedHeader from "../../components/Header/AuthenticatedHeader";
import Description from "../../components/TextComponents/Descriptions/Description";
import "./ChallengesHome.scss";

const ChallengesHome = () => {
  return (
    <main className="challengeshome">
      <AuthenticatedHeader />
      <section className="challengeshome__hero-banner">
        <img
          className="challengeshome__hero-image"
          src={heroBanner}
          alt="location with phone and map"
        />
        <h3 className="challengeshome__hero-text">Travel Challenges</h3>
      </section>
      <Description description="Embark on exciting travel challenges and explore the world while earning rewards every step of the way! From conquering every U.S. state to marveling at wonders across continents, the fun challenges make globe-trotting a rewarding adventure." />
      <section className="challengeshome__cards">
        <div className="challengeshome__cards--content">
          <div className="challengeshome__image-container yellow">
            <img
              className="challengeshome__image"
              src={usaChallengeImage}
              alt="location with phone and map"
            />
          </div>
          <p className="challengeshome__name">
            Cross-Country Adventure: Discovering America
          </p>
          <p className="challengeshome__description">
            Embark on a thrilling journey through the heartland of America with
            our 'Cross-Country Adventure' challenge. Discover the diverse
            landscapes and vibrant cultures of each region as you journey across
            the United States, earning rewards along the way!
          </p>
          <Link
            className="challengeshome__button"
            to="/challenges/us-states-challenge"
          >
            Let's Go!
          </Link>
        </div>
        <div className="challengeshome__cards--content">
          <div className="challengeshome__image-container blue">
            <img
              className="challengeshome__image amazing-race__image"
              src={amazingRaceImage}
              alt="location with phone and map"
            />
          </div>
          <p className="challengeshome__name">The Amazing Race</p>
          <p className="challengeshome__description">
            Join 'The Amazing Race' challenge and traverse continents! Explore
            diverse cultures and landscapes, visiting one country in each
            (excluding Antarctica), to unlock thrilling rewards along your
            global journey!
          </p>
          <Link
            className="challengeshome__button"
            to="/challenges/the-amazing-race"
          >
            Ready, Set, Go!
          </Link>
        </div>
        <div className="challengeshome__cards--content">
          <div className="challengeshome__image-container gray">
            <img
              className="challengeshome__image rome__image"
              src={rome}
              alt="location with phone and map"
            />
          </div>
          <p className="challengeshome__name">The World Wonders</p>
          <p className="challengeshome__description">
          Journey across continents, immersing yourself in the richness of different cultures and landscapes. From the Great Wall of China to Machu Picchu, each wonder holds its own allure and history.
          </p>
          <Link
            className="challengeshome__button"
            to="/challenges/the-world-wonders"
          >
            Be Amazed!
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ChallengesHome;
