import "./FlightTableHeader.scss";
import arrival from "../../../assets/icons/plane-arrival-solid.svg";
import departure from "../../../assets/icons/plane-departure-solid.svg";
import ticket from "../../../assets/icons/ticket-simple-solid.svg";
import calendar from "../../../assets/icons/calendar-solid.svg";

const FlightTableHeader = ({ totalFlights }) => {
  console.log(totalFlights);

  return (
    <section>
      <div className={`table-labels ${totalFlights === 0 ? `hidden` : ``}`}>
        <div className="table-labels__group table-labels__group--date padding-date">
          <img className="table-labels__icons" src={calendar} />
          <p className="table-labels__date">Date</p>
        </div>
        <div className="table-labels__group table-labels__group--origin">
          <img className="table-labels__icons" src={arrival} />
          <p className="table-labels__origin">Origin Airport</p>
        </div>
        <div className="table-labels__group table-labels__group--departure">
          <img className="table-labels__icons" src={departure} />
          <p className="table-labels__destination">Destination Airport</p>
        </div>
        <div className="table-labels__group">
          <img className="table-labels__icons" src={ticket} />
          <p className="table-labels__economy">Economy</p>
        </div>
        <div className="table-labels__group">
          <img className="table-labels__icons" src={ticket} />
          <p className="table-labels__premium">Premium</p>
        </div>
        <div className="table-labels__group">
          <img className="table-labels__icons" src={ticket} />
          <p className="table-labels__business">Business</p>
        </div>
        <div className="table-labels__group">
          <img className="table-labels__icons" src={ticket} />
          <p className="table-labels__first">First</p>
        </div>
      </div>
    </section>
  );
};

export default FlightTableHeader;
