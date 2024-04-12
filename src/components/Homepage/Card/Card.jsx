import './Card.scss'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <section className="homecard">
        <h3 className="homecard__header">{props.header}</h3>
        <h1 className="homecard__subheader">{props.subheader}</h1>
        <NavLink to={"/flights"} className="homecard__button">
            <div>
              <p>Find flights</p>
            </div>
        </NavLink>
    </section>
  )
}

export default Card