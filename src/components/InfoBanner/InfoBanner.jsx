import './InfoBanner.scss'

const InfoBanner = (props) => {
  return (
    <div className="info">
      <div className="info__firstsection">
        <h3 className="info__firstsection--header">{props.header}</h3>
        <ul className="info__firstsection--copy">
            <li className="info__firstsection--values">{props.value1}</li>
            <li className="info__firstsection--values">{props.value2}</li>
            <li className="info__firstsection--values">{props.value3}</li>
        </ul>
      </div>
      <div className="info__secondsection">
        <img className="info__secondsection--image" src={props.image} />
     </div>
    </div>
  );
};

export default InfoBanner;
