import "./Header.scss";
import skyquestLogo from "../../assets/logos/skyquest-white.svg";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {

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
      {!jwt ? ( 
        <>
        <div className="navbar__logo-container">
        <Link to={"/"}>
          <img
            className="navbar__logo"
            src={skyquestLogo}
            alt="skyquest logo"
          />
        </Link>
      </div>
      <section className="navbar__links">
          <NavLink to={"/login"} className="navbar__linkLogin">  {/* ${location === path ? ('active') : ('') }`}  */}
            <div>
              <p>Log in</p>
            </div>
          </NavLink>
          <NavLink to={"/signup"} className="navbar__linkSignup">  {/* ${location === path ? ('active') : ('') }`} */}
            <div>
              <p>Sign up</p>
            </div>
          </NavLink>
      </section> </> ) : (
        <>
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
    </section>
    </> )  }
    </header>
  );
};


export default Header