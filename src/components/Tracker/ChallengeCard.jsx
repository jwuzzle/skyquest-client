//Cards used for the Amazing Race Challenge

/* import "./StateCounterCard.scss"; */
import "./ChallengeCard.scss";
import checkIcon from "../../assets/icons/plane-circle-check-solid.svg";
import { useState } from "react";

const ChallengeCard = (props) => {

  const [isClicked, setIsClicked] = useState(false);
  const [statecode, setStatecode] = useState();

  const handleClick = () => {
    props.onButtonClick();
    setIsClicked(true);
    setStatecode(props.state_code)
  };
 
  console.log(statecode)
  console.log(isClicked)

  return (
      <section className="arcard">
        <div className="arcard-state">
          <img
            className="arcard-state__flag"
            src={props.image}
            alt={`Picture of continent:${props.continent}`}
          />
          <div className="arcard-state__content">
            <h2>{props.continent}</h2>
            <img
              className={`arcard__complete-icon ${
                props.visited == "0" ? "off" : "on"
              }`}
              src={checkIcon}
            />
            <p>{props.description}{props.examples}</p>
            <button
              className={`arcard-state__button ${props.visited == "0" ? "on" : "off"}`}
              onClick={handleClick}

            >
              Mark as Visited
            </button>
          </div>
        </div>
      </section>
  );
};

export default ChallengeCard;
