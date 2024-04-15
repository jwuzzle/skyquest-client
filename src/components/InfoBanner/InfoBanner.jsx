import "./InfoBanner.scss";

const InfoBanner = (props) => {
  return (
    <div className="info">
      <div className="info__firstsection">
        <h1 className="info__firstsection--header">{props.header}</h1>
        <h2 className="info__firstsection--subheader">{props.subheader}</h2>
        <ul className="info__firstsection--copy">
          <div className="info__firstsection--copygroup">
            <img
              className="info__firstsection--icon"
              src={props.icon}
              alt={props.iconalt}
            />
            <div className="info__firstsection--values">
            <li className="info__firstsection--values-header">Explore more, spend less.</li>
            <li className="info__firstsection--values-copy">Our tools help you discover the world affordably, connecting you with unforgettable experiences.</li>
            </div>
          </div>
          <div className="info__firstsection--copygroup">
            <img
              className="info__firstsection--icon"
              src={props.icon}
              alt={props.iconalt}
            />
             <div className="info__firstsection--values">
            <li className="info__firstsection--values-header">Maximize your points.</li>
            <li className="info__firstsection--values-copy">Find the best flight options for your credit card rewards, unlocking endless travel possibilities.</li>
          </div>
          </div>
        </ul>
      </div>
      <div className="info__secondsection">
        <img
          className="info__secondsection--image"
          src={props.image}
          alt={props.imgalt}
        />
      </div>
    </div>
  );
};

export default InfoBanner;
