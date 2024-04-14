import "./InfoBannerTwo.scss";

const InfoBannerTwo = (props) => {
  return (
    <div className="infotwo">
        <div className="infotwo__secondsection">
        <img
          className="infotwo__secondsection--image"
          src={props.image}
          alt={props.imgalt}
        />
      </div>
      <div className="infotwo__firstsection">
        <h1 className="infotwo__firstsection--header">{props.header}</h1>
        <h2 className="infotwo__firstsection--subheader">{props.subheader}</h2>
        <ul className="infotwo__firstsection--copy">
          <div className="infotwo__firstsection--copygroup">
            <img
              className="infotwo__firstsection--icon"
              src={props.icon}
              alt={props.iconalt}
            />
            <div className="infotwo__firstsection--values">
            <li className="infotwo__firstsection--values-header">Embark on exciting challenges and earn rewards!</li>
            <li className="infotwo__firstsection--values-copy">Whether it's exploring all states or all continents, we've got adventures for every type of traveler.</li>
            </div>
          </div>
          <div className="infotwo__firstsection--copygroup">
            <img
              className="infotwo__firstsection--icon"
              src={props.icon}
              alt={props.iconalt}
            />
            <div className="infotwo__firstsection--values">
            <li className="infotwo__firstsection--values-header">Personalized recommendations.</li>
            <li className="infotwo__firstsection--values-copy">Let us guide you to your next dream destination with tailored suggestions based on your preferences.</li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default InfoBannerTwo;
