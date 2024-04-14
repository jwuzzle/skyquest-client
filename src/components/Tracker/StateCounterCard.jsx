import "./StateCounterCard.scss";
import checkIcon from "../../assets/icons/plane-circle-check-solid.svg";
import { useState } from "react";

const StateCounterCard = (props) => {

  const [isClicked, setIsClicked] = useState(false);
  const [statecode, setStatecode] = useState();
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    props.onButtonClick();
    setIsClicked(true);
    setStatecode(props.state_code)
  };
 
/*   console.log(statecode)
  console.log(isClicked) */

  return (
      <section className="card">
        <div className="state-card">
          <img
            className="state-card__flag"
            src={props.image}
            alt={`${props.state} flag by allexxandar`}
          />
          <div className="state-card__content">
            <h2>{props.state}</h2>
            <img
              className={`card__complete-icon ${
                props.visited == "0" ? "off" : "on"
              }`}
              src={checkIcon}
            />
            <p>{props.description}</p>
            <button
              className={`card__button ${props.visited == "0" ? "on" : "off"}`}
              onClick={handleClick}
              value={props.state_code}
            >
              Mark as Visited
            </button>
          </div>
        </div>
      </section>
  );
};

export default StateCounterCard;
