import "./StateCounterCard.scss";
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
      <section className="card">
        <div className="state-card">
          <img
            className="state-card__flag"
            src={props.image}
            alt={`${props.continent} flag by allexxandar`}
          />
          <div className="state-card__content">
            <h2>{props.continent}</h2>
            <img
              className={`card__complete-icon ${
                props.visited == "0" ? "off" : "on"
              }`}
              src={checkIcon}
            />
            <p>{props.description}</p>
            <p>{props.examples}</p>
            <button
              className={`card__button ${props.visited == "0" ? "on" : "off"}`}
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
