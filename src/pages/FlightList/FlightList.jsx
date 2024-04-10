import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import flightRow from "../../components/FlightList/FlightInfoRow";
import FlightInfoRow from "../../components/FlightList/FlightInfoRow";
import OriginSelectField from "../../components/FormFields/SelectField/OriginSelectField";
import DestinationSelectField from "../../components/FormFields/SelectField/DestinationSelectField";
import SourceSelectField from "../../components/FormFields/SelectField/SourceSelectField";
import Pagination from "../../components/Pagination/Pagination";
import airplane from "../../assets/images/wing-airplane-flying-sea-island.jpg";
import "./FlightList.scss";
import FlightTableHeader from "../../components/FlightList/FlightTableHeader/FlightTableHeader"

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
      <div>FlightList</div>
      <form className="flight-search" onSubmit={onSubmit}>
        {/* <img className="flight-search__banner" src={airplane} alt="airplane wing in the sky by jannoon028" /> */}
        <label htmlFor="origin">Origin:</label>
        <select
          id="origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        >
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <label htmlFor="destination">Destination:</label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <label htmlFor="source">Airline:</label>
        <select
          id="source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        >
          <option value="delta">Delta</option>
          <option value="united">United</option>
          <option value="aeroplan">Air Canada</option>
          <option value="flyingblue"> Air France</option>
        </select>
        <button>SEARCH</button>
      </form>
      <FlightTableHeader totalFlights={flightData.length} currentPage={currentPage} loading={loading}/>
      <div>
      {loading ? <h2>Loading...</h2> : ''}
      </div>
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
      {/*  <button onClick={fetchNextPageData}>NEXT</button> */}
    </>
  );
};

export default FlightList;

{
  /* <p key={flight.ID}>
        {flight.Date}
        {flight.Route.OriginAirport}
        {flight.Route.DestinationAirport}
        {flight.Source}
        {flight.YMileageCost}
        {flight.WMileageCost}
        {flight.JMileageCost}
        {flight.FMileageCost}
        </p> */
}

{
  /* <form>
        <OriginSelectField 
         id="origin"
        />
        <DestinationSelectField 
        id="destination"
        />
        <SourceSelectField 
        id="source"
        />
      {/* <button onClick={fetchFlightData}>SEARCH</button>  */
}
{
  /* </form> */
}
{
  /* */
}
{
  /*  */
}

/* // do not need this in order for search button to work to initial the get request
useEffect(() => {
    fetchFlightData()
  }, []) */
