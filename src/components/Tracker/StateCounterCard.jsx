import { useState } from "react";
import "./StateCounterCard.scss";

const StateCounterCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [statecode, setStatecode] = useState();
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    props.onButtonClick();
    setIsClicked(true);
    setStatecode(props.state_code)
  };
 
  console.log(statecode)
  console.log(isClicked)


  return (
    <>
      <div className={`card ${flip ? "flip" : ""}`}>
        <div className="front" onClick={() => setFlip(!flip)}>
          {/* <img src={props.image} className="front" onClick={() => setFlip(!flip)} /> */}
          <p>{props.state}</p>
        </div>
        <div className="back" onClick={() => setFlip(!flip)}>
          <p className="card__description">{props.description}</p>
          <button className="card__button" onClick={handleClick} checked={props.check} disabled={isClicked} value={props.state_code}>
            Visited
          </button>
        </div>
      </div>
    </>
  );
};

export default StateCounterCard;
