import React from "react";
import "./LandingPageBanner.scss";

const LandingPageBanner = (props) => {
  return (
   <div className="banner-container">
            <video className="banner-container__video" loop autoPlay muted controls=''>
              <source src={props.video} type="video/mp4" />
            </video>
            <h3 className="banner-container__header">{props.title}</h3>
          </div>
  );
};

export default LandingPageBanner;


