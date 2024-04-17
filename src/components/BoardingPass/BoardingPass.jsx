import React from "react";
import "./BoardingPass.scss";
import plane from "../../assets/icons/plane-solid.svg";
import { NavLink } from "react-router-dom";

const BoardingPass = (props) => {
  return (
    <>
      <div className="boarding-pass">
        <header>
          {/* <img src={plane} /> */}
          <div className="flight">
            <small>flight</small>
            <strong>BRAINSTATION 418</strong>
          </div>
        </header>
        <main className="flightdetails">
        <section className="flightinfo">
        <section className="cities">
          <div className="city">
            <small>New York</small>
            <div className="origin">
              <strong>JFK</strong>
              <img className="origin__img" src={plane} />
            </div>
          </div>
          <div className="city">
            <small>Paris</small>

            <strong>CDG</strong>
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
          <div className="box">
            <div className="passenger">
              <small>passenger</small>
              <strong>{props.name}</strong>
            </div>
            <div className="date">
              <small>Date</small>
              <strong>Thurs, 18 April 2024</strong>
            </div>
          </div>
        </section>
        </section>
        <section className="flightsearch">
          <div className="flightbox">
            <p className="flightsearch__header">Your Miles, Your Way.</p>
            <p className="flightsearch__subheader">Search Flights Across Airlines By Miles</p>
            <NavLink to={"/flights"} className="flightsearch__link">
              <div>
                <p className="flightsearch__button">Find flights</p>
              </div>
            </NavLink>
          </div>
        </section>
        </main>
      </div>
      
    </>
  );
};

export default BoardingPass;
