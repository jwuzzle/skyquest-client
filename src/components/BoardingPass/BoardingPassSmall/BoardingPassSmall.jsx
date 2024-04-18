import React from "react";
import "./BoardingPassSmall.scss";
import plane from "../../../assets/icons/plane-solid.svg";
import { NavLink } from "react-router-dom";

const BoardingPassSmall = (props) => {
  return (
    <>
      <div className="boarding-pass__small">
        <header>
          {/* <img src={plane} /> */}
          <div className="flight">
            <small>flight</small>
            <strong>AA 418</strong>
          </div>
        </header>
        <main className="flightdetails">
        <section className="flightinfo">
        <section className="cities">
          <div className="city">
            <small>{props.city}</small>
            <div className="origin">
              <strong>{props.airport}</strong>
              <img className="origin__img" src={plane} />
            </div>
          </div>
          <div className="box">
            <div className="city">
              <small>Country</small>
              <strong>{props.country}</strong>
            </div>
            <div className="city">
              <small>Timezone</small>
              <strong>{props.timezone}</strong>
            </div>
          </div>
        </section>
        <section className="infos">
          <div className="places">
            <div className="box">
              <small>Terminal</small>
              <strong>
                <em>W</em>
              </strong>
            </div>
            <div className="box">
              <small>Gate</small>
              <strong>
                <em>C3</em>
              </strong>
            </div>
            <div className="box">
              <small>Seat</small>
              <strong>14B</strong>
            </div>
            <div className="box">
              <small>className</small>
              <strong>E</strong>
            </div>
          </div>
          <div className="times">
            <div className="box">
              <small>Boarding</small>
              <strong>3:30 PM</strong>
            </div>
            <div className="box">
              <small>Departure</small>
              <strong>4:00 PM</strong>
            </div>
            <div className="box">
              <small>Duration</small>
              <strong>02:00</strong>
            </div>
            <div className="box">
              <small>Arrival</small>
              <strong>6:00 PM</strong>
            </div>
          </div>
        </section>
        <section className="strap">
        </section>
        </section>
        </main>
      </div>
      
    </>
  );
};

export default BoardingPassSmall;
