import './ChallengesBanner.scss'
import { Link } from 'react-router-dom'

const ChallengesBanner = (props) => {
  return (
    <div className="home-challenge">
        <div className="home-challenge__details">
          <div className="image-container usa amazing">
            <img className="home-challenge__image" src={props.image} />
            </div>
            <p className="home-challenge__title">{props.title}</p>
            <p className="home-challenge__description">{props.description}</p>
            </div>
            <div className="home-challenge__details-bottom">
                <Link className="home-challenge__button" to={props.url}>{props.buttonlabel}</Link>
        </div>

    </div>
  )
}

export default ChallengesBanner