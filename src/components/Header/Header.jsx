import "./Header.scss";
import skyquestLogo from "../../assets/logos/skyquest-white.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo-container">
        <Link to={"/"}>
          <img
            className="navbar__logo"
            src={skyquestLogo}
            alt="brainflix logo"
          />
        </Link>
      </div>
    </header>
  );
};


export default Header