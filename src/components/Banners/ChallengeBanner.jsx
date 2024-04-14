import React from 'react'
import './ChallengeBanner.scss'

const ChallengeBanner = (props) => {
  return (
    <section className="challenge-banner">
        <img className="challenge-banner__image" src={props.image} alt={props.text}/>
        <h3 className="challenge-banner__header">{props.header}</h3>
   </section>
  )
}

export default ChallengeBanner