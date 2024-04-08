import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import flightRow from '../../components/FlightList/FlightInfoRow'
import FlightInfoRow from '../../components/FlightList/FlightInfoRow'

const FlightList = () => {

    const [flightData, setFlightData] = useState([])

//Get call


const fetchFlightData = async () => {
    try {
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://seats.aero/partnerapi/availability?take=500', {
        headers: {
            accept: 'application/json',
            'Partner-Authorization': 'pro_2djptjqXao2RuxK5u7UOmUQxUaS'
        }
    })
    const fullresponse = response.data
   /*  console.log(fullresponse.data) */
    setFlightData(fullresponse.data)
} catch (error) {
    console.error(error)
}
}


useEffect(() => {
    fetchFlightData()
  }, [])

console.log(flightData)



  return (
    <>
    <div>FlightList</div>
    <div>
    {flightData.map((flight) => (
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
        />
    ))}
    </div>
    </>
  )
}

export default FlightList



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