import './FlightTableHeader.scss'

const FlightTableHeader = ( {totalFlights}) => {
    console.log(totalFlights)
    
  return (
    <section>
      <div className={`table-header ${totalFlights === 0 ? `hidden` : ``}`}>
      <h3 className="table__header">Flight Results</h3></div>
    <div className={`table-labels ${totalFlights === 0 ? `hidden` : ``}`}>
        <p className="table-labels__date">Date</p>
        <p className="table-labels__origin">Origin Airport</p>
        <p className="table-labels__destination">Destination Airport</p>
        <p className="table-labels__economy">Economy</p>
        <p className="table-labels__premium">Premium</p>
        <p className="table-labels__business">Business</p>
        <p className="table-labels__first">First</p>
        </div>
    </section>

  )
}

export default FlightTableHeader
