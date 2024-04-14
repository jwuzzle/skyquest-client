import "./Header.scss";
import skyquestLogo from "../../assets/logos/skyquest-white.svg";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const AuthenticatedHeader = () => {

    const [jwt, setJwt] = useState(false)

  useEffect(() => {
  const token = sessionStorage.getItem('JWTtoken')
  if (token) {
    console.log('JWT token found in sessionStorage:', jwt);
    setJwt(true);
  } else {
    console.log('JWT token not found');
    setJwt(false);
  }
}, [jwt]);
  return (
    <header className="navbar">
      <div className="navbar__logo-container">
        <Link to={"/home"}>
          <img
            className="navbar__logo"
            src={skyquestLogo}
            alt="skyquest logo"
          />
        </Link>
      </div>
      <section className="navbar__links">
        <NavLink to={"/home"} className="navbar__link">
          <div>
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to={"/flights"} className="navbar__link">
          <div>
            <p>Flights</p>
          </div>
        </NavLink>
        <NavLink to={"/challenges"} className="navbar__link">
          <div>
            <p>Challenges</p>
          </div>
        </NavLink>
      </section>
    </header>
  );
};

export default AuthenticatedHeader;
