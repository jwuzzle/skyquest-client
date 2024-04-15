import './ChallengesBanner.scss'
import { Link } from 'react-router-dom'

const ChallengesBanner = (props) => {
  return (
    <div className="home-challenge">
        <div className="home-challenge__details">
            <img className="home-challenge__image" src={props.image} />
            <p className="home-challenge__title">{props.title}</p>
            </div>
            <div className="home-challenge__details-bottom">
                <p className="home-challenge__description">{props.description}</p>
                <Link className="home-challenge__button" to={props.url}>{props.buttonlabel}</Link>
        </div>

    </div>
  )
}

export default ChallengesBanner