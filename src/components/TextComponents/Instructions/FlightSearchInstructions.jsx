import "./FlightSearchInstructions.scss";
import route from "../../../assets/icons/flight_path.jpg"
import ticket from "../../../assets/icons/flight_ticket.jpg"
import airline from "../../../assets/icons/flight_airline.jpg"
import tiers from "../../../assets/icons/flight_tiers.jpg"

const FlightSearchInstructions = () => {
  return (
    <section className="flight-instructions">
      <div className="flight-instructions__copy-top">
        <h3 className="flight-instructions__header">
          Welcome to our flight search tool!
        </h3>
        <h2 className="flight-instructions__subheader">Here's how to use it</h2>
      </div>
      <div className="flight-instructions__copy-middle">
        <ul className="flight-instructions__ul-list">
          <li className="flight-instructions__item">
            <p className="flight-instructions__item-header">
              Select Your Regions:
            </p>
            <img className="flight-instructions__item-image"  src={route} />
            <p className="flight-instructions__item-description">
              Choose where you're flying from (original region) and where you
              want to go (destination region). This helps us find flights
              tailored to your journey.
            </p>
          </li>
          <li className="flight-instructions__item">
            <p className="flight-instructions__item-header">
              Pick Your Airline:
            </p>
            <img className="flight-instructions__item-image"  src={airline} />
            <p className="flight-instructions__item-description">
              Select your preferred airline from the list provided. This narrows
              down the search to give you options that fit your loyalty program
              or preferences.
            </p>
          </li>
          <li className="flight-instructions__item">
            <p className="flight-instructions__item-header">
              Find Your Ticket:
            </p>
            <img className="flight-instructions__item-image"  src={ticket} />
            <p className="flight-instructions__item-description">
              After you hit search, we'll display flight options with miles or
              points required per ticket. This helps you see the best value for
              your rewards.
            </p>
          </li>
          <li className="flight-instructions__item">
            <p className="flight-instructions__item-header">
              Explore Ticket Tiers:
            </p>
            <img className="flight-instructions__item-image" src={tiers} />
            <p className="flight-instructions__item-description">
              Depending on availability and the airline, you'll see four
              different ticket tiers: Economy, Premium, Business, and First
              Class. These tiers offer various levels of comfort and perks, so
              you can choose what suits you best.
            </p>
          </li>
        </ul>
      </div>
      <div className="flight-instructions__copy-bottom">
        <p>
          Currently, booking your flight directly through this platform isn't
          available. However, we're hard at work to make that possible! Keep an
          eye out for updates as we work to streamline your booking experience.
          Stay tuned for takeoff!
        </p>
      </div>
    </section>
  );
};

export default FlightSearchInstructions;
