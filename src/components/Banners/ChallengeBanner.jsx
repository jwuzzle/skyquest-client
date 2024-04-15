import React from 'react'
import './ChallengeBanner.scss'
import { Link } from 'react-router-dom'

const ChallengeBanner = (props) => {
  return (
    <section className="challenge-banner">
        <img className="challenge-banner__image" src={props.image} alt={props.text}/>
        <Link className="challenge-banner__button" to={props.url}>
          Back
        </Link>
        <h3 className="challenge-banner__header">{props.header}</h3>
   </section>
  )
}

export default ChallengeBanner