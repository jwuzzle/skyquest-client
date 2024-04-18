import { Link } from "react-router-dom";
import AuthenticatedHeader from "../../../components/Header/AuthenticatedHeader";
import Description from "../../../components/TextComponents/Descriptions/Description";
import usMapImage from "../../../assets/images/usa-elements-paper-map.jpg";
import newEnglandImg from "../../../assets/images/ne_new_england.jpg";
import neMidAtlanticImg from "../../../assets/images/ne_mid_atlantic.jpg";
import southAtlanticImg from "../../../assets/images/south_atlantic.jpg";
import southEastCentralImg from "../../../assets/images/south_east_central.jpg";
import pacificWestImg from "../../../assets/images/pacific_west.jpg"
import southwestCentralImg from "../../../assets/images/southwest_central.jpg";
import midwestEastImg from "../../../assets/images/midwest_east.jpg";
import midwestWestImg from "../../../assets/images/midwest_west.jpg";
import mountainWestImg from "../../../assets/images/mountain_west.jpg"
import "../USAChallengeHome/USAChallengeHome.scss";

const ChallengesHome = () => {
  return (
    <main className="challenges">
      <AuthenticatedHeader />
      <section className="challenges__hero-banner">
        <img
          className="challenges__hero-image"
          src={usMapImage}
          alt="location with phone and map"
        />
        <Link className="challenges__button" to="/challenges">
          Back
        </Link>
        <h3 className="challenges__hero-text">
          Explore the United States Challenge
        </h3>
      </section>
      <Description description="Embark on a journey across the United States and explore the rich tapestry of each state's culture, history, and natural wonders. From the majestic Grand Canyon to the vibrant streets of New York City, there's endless adventure awaiting you. As you explore each state, come back here and mark it off the list by clicking on the cards below. Once you've explored all of the US, you'll earn extra reward miles! Get ready to discover the beauty and diversity of America's states in this thrilling challenge!" />
      <section className="challenges__cards">
      <div className="challenges__cards--content">
          <div className="challenge__image-container palegreen">
            <img
              className="challenge__image"
              src={newEnglandImg}
              alt="location with phone and map"
            />
          </div>
          <p className="challenge__name--nomargin">
            Region: The Northeast New England
          </p>
          <p className="challenge__description">
            Embark on an exciting journey through Northeast New England, from
            Maine to Connecticut. Explore historic cities, scenic wonders, and
            earn rewards with each state you conquer. Join the adventure and
            uncover the diverse charm of Northeast New England!
          </p>
          <Link
            className="challenge__button"
            to="/challenges/us-states-challenge/northeast-new-england"
          >
            Let's Go!
          </Link>
        </div>
        <div className="challenges__cards--content">
          <div className="challenge__image-container palegreen">
            <img
              className="challenge__image"
              src={neMidAtlanticImg}
              alt="location with phone and map"
            />
          </div>
          <p className="challenge__name--nomargin">
            Region: The Northeast Mid-Atlantic
          </p>
          <p className="challenge__description">
            Embark on a thrilling expedition through the vibrant Northeast
            Mid-Atlantic region, including New York, New Jersey, and
            Pennsylvania. Explore iconic cities, historic landmarks, and scenic
            wonders while earning rewards with each state you conquer.
          </p>
          <Link
            className="challenge__button"
            to="/challenges/us-states-challenge/northeast-mid-atlantic"
          >
            Let's Go!
          </Link>
        </div>
        <div className="challenges__cards--content">
          <div className="challenge__image-container palegreen">
            <img
              className="challenge__image"
              src={southAtlanticImg}
              alt="location with phone and map"
            />
          </div>
          <p className="challenge__name--nomargin">
            Region: The South Atlantic
          </p>
          <p className="challenge__description">
            Embark on an exciting journey through the dynamic South Atlantic
            region, from Maryland to Florida. Discover rich history, diverse
            culture, and scenic wonders as you conquer each state and earn
            rewards along the way. Join the adventure and explore the vibrant
            charm of the South Atlantic!
          </p>
          <Link
            className="challenge__button"
            to="/challenges/us-states-challenge/south-atlantic"
          >
            Let's Go!
          </Link>
        </div>
        <div className="challenges__cards--content">
          <div className="challenge__image-container palegreen">
            <img
              className="challenge__image"
              src={southEastCentralImg}
              alt="location with phone and map"
            />
          </div>
          <p className="challenge__name--nomargin">
            Region: The South East Central
          </p>
          <p className="challenge__description">
            Go on a thrilling journey through the captivating Southeast Central
            region, exploring Mississippi, Alabama, Tennessee, and Kentucky's
            rich heritage and natural wonders, unlocking treasures along the
            way.
          </p>
          <Link
            className="challenge__button"
            to="/challenges/us-states-challenge/south-east-central"
          >
            Let's Go!
          </Link>
        </div>
        <div className="challenges__cards--content">
          <div className="challenge__image-container palegreen">
            <img
              className="challenge__image"
              src={southwestCentralImg}
              alt="location with phone and map"
            />
          </div>
        <p className="challenge__name--nomargin">
        Region: The South West Central
          </p>
          <p className="challenge__description">
          Embark on a journey through the dynamic South West Central region, from the bayous of Louisiana to the plains of Oklahoma and Texas. Explore the rich cultures and diverse landscapes of Arkansas, Louisiana, Oklahoma, and Texas, embracing the warmth of Southern hospitality and the allure of the South West Central's vibrant spirit!
          </p>
          <Link
            className="challenge__button"
            to="/challenges/us-states-challenge/south-west-central"
          >
            Let's Go!
          </Link>
          </div>
        
        <div className="challenges__cards--content">
          <div className="challenge__image-container palegreen">
            <img
              className="challenge__image"
              src={pacificWestImg}
              alt="location with phone and map"
            />
          </div>
        <p className="challenge__name--nomargin">
            Region: The Midwest East
          </p>
          <p className="challenge__description">
          Embark on a captivating journey through the heartland of America in the Midwest East, from vibrant cities to serene lakeshores. Explore Ohio, Illinois, Wisconsin, Indiana, and Michigan, uncovering hidden gems and embracing the region's rich culture and landscapes!
          </p>
          <Link
            className="challenge__button"
            to="/challenges/us-states-challenge/midwest-east"
          >
            Let's Go!
          </Link>
        </div>
        <div className="challenges__cards--content">
          <div className="challenge__image-container palegreen">
            <img
              className="challenge__image"
              src={midwestEastImg}
              alt="location with phone and map"
            />
          </div>
        <p className="challenge__name--nomargin">
            Region: The Midwest West
          </p>
          <p className="challenge__description">
          Embark on a journey through the vast Midwest West, from the rugged Badlands to the fertile plains of South Dakota, North Dakota, Nebraska, Kansas, Minnesota, Iowa, and Missouri. Discover the rich culture and history of the region as you traverse bustling cities and quaint rural communities, embracing the timeless charm of the Midwest West!
          </p>
          <Link
            className="challenge__button"
            to="/challenges/us-states-challenge/midwest-west"
          >
            Let's Go!
          </Link>
          </div>
          <div className="challenges__cards--content">
          <div className="challenge__image-container palegreen">
            <img
              className="challenge__image"
              src={mountainWestImg}
              alt="location with phone and map"
            />
          </div>
        <p className="challenge__name--nomargin">
        Region: The Mountain West
          </p>
          <p className="challenge__description">
          Embark on a thrilling journey through the awe-inspiring Mountain West region, from the deserts of Arizona to the peaks of Montana. Explore the rugged landscapes and vibrant cultures of Arizona, Colorado, Utah, New Mexico, Nevada, Wyoming, Idaho, and Montana, embracing the adventure and beauty of the Mountain West!
          </p>
          <Link
            className="challenge__button"
            to="/challenges/us-states-challenge/west-mountain"
          >
            Let's Go!
          </Link>
          </div>
          <div className="challenges__cards--content">
          <div className="challenge__image-container palegreen">
            <img
              className="challenge__image"
              src={pacificWestImg}
              alt="location with phone and map"
            />
          </div>
        <p className="challenge__name--nomargin">
            Region: The Pacific West
          </p>
          <p className="challenge__description">
          Explpre across the diverse Pacific West, from sunny Hawaii to chilly Alaska, exploring the vibrant landscapes and cultures of Washington, Oregon, California, and beyond. Unlock hidden treasures and embrace the captivating contrasts of the Pacific West!
          </p>
          <Link
            className="challenge__button"
            to="/challenges/us-states-challenge/west-pacific"
          >
            Let's Go!
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ChallengesHome;
