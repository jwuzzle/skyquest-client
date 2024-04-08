import { useState } from "react";
import "./StateCounterCard.scss";

const StateCounterCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    props.onButtonClick();
    setIsClicked(true);
  };

  const [flip, setFlip] = useState(false);
  console.log(flip);

  return (
    <>
      <div className={`card ${flip ? "flip" : ""}`}>
        <div className="front" onClick={() => setFlip(!flip)}>
          <p>{props.state}</p>
        </div>
        <div className="back" onClick={() => setFlip(!flip)}>
          <p className="card__description">{props.description}</p>
          <button className="card__button" onClick={handleClick} disabled={isClicked}>
            Visited
          </button>
        </div>
      </div>
    </>
  );
};

export default StateCounterCard;
