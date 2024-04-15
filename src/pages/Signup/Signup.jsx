import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import UnauthenticatedHeader from "../../components/Header/UnauthenticatedHeader"
import skyquestBlackLogo from "../../assets/logos/skyquest-black.svg"
import './Signup.scss'

const baseURL = "http://localhost:8080";
const signupURL = `${baseURL}/users`;

const Signup = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    //POST request to signupURL with user entered data
    try {
      const response = await axios.post(signupURL, {
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        username: event.target.username.value,
        email: event.target.email.value,
        password_hash: event.target.password_hash.value,
      });
      console.log("Response from server after sign up:", response.data);
      setIsSignedUp(true);
      console.log("Token stored in session storage:", response.data.token);
      sessionStorage.setItem("JWTtoken", response.data.token);
    } catch (error) {
      setErrorMessage(
        `${error.message}: Something went wrong. Please try again.`
      );
    }
    navigate("/home");
  };

  if (!isSignedUp)
    return (
      <>
      <UnauthenticatedHeader />
        <div className="signup">
        <img className="signup__logo" src={skyquestBlackLogo} alt="skyquest logo" />
          <h1 className="signup__header">Create an account</h1>
          <form className="signup__container--signup" onSubmit={handleSignup}>
            <div className="signup__input">
            <label className="signup__label">Username</label>
              <input type="text" name="username" />
            </div>
            <div className="signup__input">
            <label className="signup__label">First Name</label>
            <input type="text" name="first_name" />
            </div>
            <div className="signup__input">
            <label className="signup__label">Last Name</label>
             <input type="text" name="last_name" />
            </div>
            <div className="signup__input">
            <label className="signup__label">Email</label>
           <input type="email" name="email" />
            </div>
            <div className="signup__input">
            <label className="signup__label">Password</label>
          <input type="password" name="password_hash" />
            </div>
            <div className="login__buttons">
            <button type="submit" className="signup__button">
              Sign up
            </button>
            <button type="cancel" className="signup__cancel">
              Cancel
            </button>
            </div>
          </form>
          <div className="signup__login">
            <p className="signup__login--now">Have an account?</p>
            <Link to={"/login"} className="signup__login--link">
              <p>Log in</p></Link>
          </div>
        </div>
      </>
    );
};

export default Signup;
