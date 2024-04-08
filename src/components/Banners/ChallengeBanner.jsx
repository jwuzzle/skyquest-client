import React from 'react'
import './ChallengeBanner.scss'

const ChallengeBanner = (props) => {
  return (
    <div>
        <img className="challenge-banner__image" src={props.image} alt={props.text}/>
        <div className="challenge-banner__copy-container">
            <h3 className="challenge-banner__header">{props.header}</h3>
            <p className="challenge-banner__description">{props.description}</p>
        </div>
    </div>
  )
}

export default ChallengeBanner