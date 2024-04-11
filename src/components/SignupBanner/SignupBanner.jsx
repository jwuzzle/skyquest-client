import { NavLink } from "react-router-dom";
import './SignupBanner.scss'

const SignupBanner = (props) => {
    return (
        <div className="signup-banner">
            <div className="signup-banner__item-container">
          <h2 className="signup-banner__header">{props.header}</h2>
          <NavLink to={"/signup"} className="signup-banner__button">
            <div>
              <p>Sign up</p>
            </div>
          </NavLink>
          </div>
        </div>
      );
    };

export default SignupBanner