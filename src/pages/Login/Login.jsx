import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import UnauthenticatedHeader from "../../components/Header/UnauthenticatedHeader"

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
    <div>
      <h1>Login</h1>
      {isLoginError && <label className="error">{errorMessage}</label>}
      <form className="form__container--login" onSubmit={handleLogin}>
        <div className="form__input">
          Username: <input type="text" name="username" />
        </div>
        <div className="form__input">
          Password: <input type="password" name="password" />
        </div>
        <button type="submit" className="form__button">
          Login
        </button>
        <button type="cancel" className="form__cancel">
          X
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;