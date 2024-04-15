import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import UnauthenticatedHeader from "../../components/Header/UnauthenticatedHeader"
import "./Login.scss"
import skyquestBlackLogo from "../../assets/logos/skyquest-black.svg"

const baseURL = "http://localhost:8080";
const loginURL = `${baseURL}/login`;

const Login = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    //POST to loginURL with username and password
    try {
      const response = await axios.post(loginURL, {
        username: event.target.username.value,
        password_hash: event.target.password.value,
      });
      console.log("Response from server after log in:", response.data);
      setIsLoggedIn(true);
      setIsLoginError(false);
      setErrorMessage("");
      console.log("Token stored in session storage:", response.data.token);
      sessionStorage.setItem("JWTtoken", response.data.token);
    } catch (error) {
      setIsLoginError(true);
      setErrorMessage(
        `${error.response.data.error.message}. Problem with login.`
      );
    }
    navigate("/home")
  };

if (!isLoggedIn) return (
    <>
    <UnauthenticatedHeader />
    <div className="login">
      <img className="login__logo" src={skyquestBlackLogo} alt="skyquest logo" />
      {isLoginError && <label className="error">{errorMessage}</label>}
      <form className="login__container--login" onSubmit={handleLogin}>
        <div className="login__input">
          <label className="login__label">Username</label>
          <input type="text" name="username" />
        </div>
        <div className="login__input">
        <label className="login__label">Password</label>
        <input type="password" name="password" />
        </div>
        <div className="login__buttons">
        <button type="submit" className="login__button">
          Log in
        </button>
        <button type="cancel" className="login__cancel">
          Cancel
        </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;