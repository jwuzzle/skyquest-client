import { NavLink } from "react-router-dom";
import "./LandingPageBanner.scss";

const LandingPageBanner = (props) => {
  return (
   <div className="banner-container">
            <video className="banner-container__video" loop autoPlay muted controls=''>
              <source src={props.video} type="video/mp4" />
            </video>
            <div className="banner-container__header">
            <h3 className="banner-container__copy">{props.title1}</h3>
            <h3 className="banner-container__copy">{props.title2}</h3>
            <NavLink to={"/signup"} className="banner-container__button-container">
            <div>
              <p className="banner-container__button">Sign up</p>
            </div>
          </NavLink>
            </div>
            
          </div>
  );
};

export default LandingPageBanner;


