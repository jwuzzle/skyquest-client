import React from "react";
import "./FlightInfoRow.scss";

const FlightInfoRow = (props) => {
  return (
    <section>
      <div className="flightRow">
        <div className="flightRow__container">
          <p className="flightRow__title">Date:</p>
          <p className="flightRow__date">{props.date}</p>
        </div>
        <div className="flightRow__container">
          <p className="flightRow__title">Origin:</p>
          <p className="flightRow__origin">{props.origin}</p>
        </div>
        <div className="flightRow__container">
          <p className="flightRow__title">Destination:</p>
          <p className="flightRow__destination">{props.destination}</p>
        </div>
        <div className="flightRow__container">
          <p className="flightRow__title">Economy:</p>
          <p className="flightRow__economy">{props.economy}</p>
        </div>
        <div className="flightRow__container">
          <p className="flightRow__title">Premium:</p>
          <p className="flightRow__premium">{props.premium}</p>
        </div>
        <div className="flightRow__container">
          <p className="flightRow__title">Business:</p>
          <p className="flightRow__business">{props.business}</p>
        </div>
        <div className="flightRow__container">
          <p className="flightRow__title">First:</p>
          <p className="flightRow__first">{props.first}</p>
        </div>
      </div>
    </section>
  );
};

export default FlightInfoRow;
