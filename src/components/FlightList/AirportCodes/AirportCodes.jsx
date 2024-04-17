import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./AirportCodes.scss";
import "ldrs/grid";
import BoardingPassSmall from "../../BoardingPass/BoardingPassSmall/BoardingPassSmall";

const AirportCodes = () => {
  const [airportData, setAirportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [iata, setIata] = useState("");
  const [searchResults, setSearchResults] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const iataLowercase = iata.toLowerCase();

    try {
      console.log("Iata:", iata);
      console.log("Iata:", iataLowercase);
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/airports?iata=${iataLowercase}`
      );
      console.log(response.data);
      /*     const fullresponse = response.data; */
      /*     console.log(fullresponse.data); */
      setAirportData(response.data);
      setLoading(false);
      setSearchResults(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="airport-search">
        <form className="airport-search__container--form" onSubmit={onSubmit}>
          <div className="airport-search__input">
            <label className="airport-search__input--label" htmlFor="iata">
              Airport Code (as displayed in the Origin or Destination Airport
              columns above):
            </label>
            <input
              type="text"
              className="airport-search__input--text"
              id="iata"
              value={iata}
              onChange={(e) => setIata(e.target.value)}
            />
          </div>
          <div className="airport-search__input--button-container">
            <button className="airport-search__input--button">SEARCH</button>
          </div>
        </form>
        <div
          className={`airport-table-component ${
            searchResults === false ? "airport-table-off" : "airport-table-on"
          }`}
        >
            <BoardingPassSmall 
            airport={!searchResults ? "" : airportData[0].name}
            city={!searchResults ? "" : airportData[0].city}
            country={!searchResults ? "" : airportData[0].country}
            timezone={!searchResults ? "" : airportData[0].timezone}
          /* <p>Airport Name: {!searchResults ? "" : airportData[0].name}</p>
          <p>City: {!searchResults ? "" : airportData[0].city}</p>
          <p>Country: {!searchResults ? "" : airportData[0].country}</p>
          <p>Timezone: {!searchResults ? "" : airportData[0].timezone}</p> */
          />
        </div>{" "}
      </section>
    </>
  );
};

export default AirportCodes;
