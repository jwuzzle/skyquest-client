import React from 'react'
import './FlightInfoRow.scss'

const FlightInfoRow = (props) => {

  if(props.loading) {
    return <h2>Loading...</h2>
  }

  return (
    <section>
    <div className="flightRow">
        <div className="flightRow__date">{props.date}</div>
        <div className="flightRow__origin">{props.origin}</div>
        <div className="flightRow__destination">{props.destination}</div>
        <div className="flightRow__airline">{props.airline}</div>
        <div className="flightRow__economy">{props.economy}</div>
        <div className="flightRow__premium">{props.premium}</div>
        <div className="flightRow__business">{props.business}</div>
        <div className="flightRow__first">{props.first}</div>
    </div>
    </section>
  )
}

export default FlightInfoRow