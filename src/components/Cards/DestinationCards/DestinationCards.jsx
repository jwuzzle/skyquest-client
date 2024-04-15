import "./DestinationCard.scss";
import globe from '../../../assets/images/globe.jpg'

const DestinationCard = (props) => {

  return (
    <div>
        <div className="destination-card">
            <img className="destination-card__image" src={globe} /* alt={`${props.title}`} */ />
            <div className="destination-card__copy">
                <p className="destination-card__title">{props.title}</p>
                <p className="destination-card__description">{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default DestinationCard