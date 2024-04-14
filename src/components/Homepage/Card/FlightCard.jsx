import './FlightCard.scss'
import { NavLink } from 'react-router-dom'
import planeTicket from "../../../assets/images/plane_ticket.jpg"

const FlightCard = (props) => {
  return (
    <section className="homecard">
        <h3 className="homecard__header">{props.header}</h3>
        <h1 className="homecard__subheader">{props.subheader}</h1>
        <h1 className="homecard__subheader">{props.subheader_two}</h1>
        <div className="homecard__bottom">
          <div className="homecard__image-container">
        <img className="homecard__image"src={props.image} alt="plane ticket" />
        </div>
        <div className="homecard__button-container">
        <NavLink to={"/flights"} className="homecard__button">
            <div>
              <p>Find flights</p>
            </div>
        </NavLink>
        </div>
        </div>
    </section>
  )
}

export default FlightCard