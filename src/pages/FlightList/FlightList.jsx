import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import FlightInfoRow from "../../components/FlightList/FlightInfoRow";
import Pagination from "../../components/Pagination/Pagination";
import airplane from "../../assets/images/wing-airplane-flying-sea-island.jpg";
import FlightTableHeader from "../../components/FlightList/FlightTableHeader/FlightTableHeader";
import AuthenticatedHeader from "../../components/Header/AuthenticatedHeader";
import "./FlightList.scss";

const FlightList = () => {
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage, setFlightsPerPage] = useState(20);
  const [origin, setOrigin] = useState("North America");
  const [destination, setDestination] = useState("North America");
  const [source, setSource] = useState("delta");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Origin:", origin);
      console.log("Destination:", destination);
      console.log("Source:", source);
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/flights?origin=${origin}&destination=${destination}&source=${source}`
      );
      console.log(response.data);
      const fullresponse = response.data;
      console.log(fullresponse.data);
      setFlightData(fullresponse.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  localStorage.setItem('flightData', flightData)

  //Get current flights

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flightData.slice(
    indexOfFirstFlight,
    indexOfLastFlight
  );

  //Change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== indexOfLastFlight) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
    <AuthenticatedHeader />
      <section className="flight-search">
        <div className="flight-search__container">
          <img
            className="flight-search__container--image"
            src={airplane}
            alt="airplane wing in the sky by jannoon028"
          />
          <h3 className="flight-search__container--header1">Discover the World.</h3>
          <h3 className="flight-search__container--header2">Find Flights by Miles.</h3>
          <form className="flight-search__container--form" onSubmit={onSubmit}>
            <div className="flight-search__input">
            <label className="flight-search__input--label" htmlFor="origin">Origin:</label>
            <select
              className="flight-search__input--dropdown"
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            >
              <option className="dropdown-value" value="North America">North America</option>
              <option className="dropdown-value" value="South America">South America</option>
              <option className="dropdown-value" value="Africa">Africa</option>
              <option className="dropdown-value" value="Asia">Asia</option>
              <option className="dropdown-value" value="Europe">Europe</option>
              <option className="dropdown-value" value="Oceania">Oceania</option>
            </select>
            </div>
            <div className="flight-search__input">
            <label className="flight-search__input--label" htmlFor="destination">Destination:</label>
            <select
            className="flight-search__input--dropdown"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option className="dropdown-value" value="North America">North America</option>
              <option className="dropdown-value" value="South America">South America</option>
              <option className="dropdown-value"  value="Africa">Africa</option>
              <option className="dropdown-value" value="Asia">Asia</option>
              <option className="dropdown-value" value="Europe">Europe</option>
              <option className="dropdown-value" value="Oceania">Oceania</option>
            </select>
            </div>
            <div className="flight-search__input">
            <label className="flight-search__input--label" htmlFor="source">Airline:</label>
            <select
            className="flight-search__input--dropdown"
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            >
              <option className="dropdown-value" value="delta">Delta</option>
              <option className="dropdown-value" value="united">United</option>
              <option className="dropdown-value" value="aeroplan">Air Canada</option>
              <option className="dropdown-value" value="flyingblue"> Air France</option>
            </select>
            </div>
            <div className="flight-search__input--button-container">
            <button className="flight-search__input--button">SEARCH</button>
            </div>
          </form>
        </div>
        <div className="flight-search__results-header">{loading ? "" : ""}</div>
        <FlightTableHeader
          totalFlights={flightData.length}
          currentPage={currentPage}
          loading={loading}
        />
        <div>{loading ? <h2 className="loading">Getting ready for take off...</h2> : ""}</div>
        <div>
          {currentFlights.map((flight) => (
            <FlightInfoRow
              key={flight.ID}
              date={flight.Date}
              origin={flight.Route.OriginAirport}
              destination={flight.Route.DestinationAirport}
              airline={flight.Source}
              economy={flight.YMileageCost}
              premium={flight.WMileageCost}
              business={flight.JMileageCost}
              first={flight.FMileageCost}
              loading={loading}
            />
          ))}
        </div>
        <Pagination
          flightsPerPage={flightsPerPage}
          totalFlights={flightData.length}
          paginate={paginate}
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </section>
    </>
  );
};

export default FlightList;

