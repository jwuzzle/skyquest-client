import './ChallengesBanner.scss'
import { Link } from 'react-router-dom'

const ChallengesBanner = (props) => {
  return (
    <div className="challenge">
        <div className="challenge__cards">
            <img className="challenge__image" src={props.image} />
            <div className="challenge__details">
                <p className="challenge__title">{props.title}</p>
                <p className="challenge__description">{props.description}</p>
                <Link className="challenge__button" to={props.url}>{props.buttonlabel}</Link>
            </div>
        </div>
    
    
    </div>
  )
}

export default ChallengesBanner