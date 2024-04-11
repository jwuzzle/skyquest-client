import "./Header.scss";
import skyquestLogo from "../../assets/logos/skyquest-white.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
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
      </section>
    </header>
  );
};


export default Header