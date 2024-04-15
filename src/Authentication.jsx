import { useEffect, useState } from "react";
import axios from "axios";
import Homepage from "../src/pages/Homepage/Homepage";
import { Routes, Route, useParams } from "react-router-dom";

const baseURL = "http://localhost:8080";
const signupURL = `${baseURL}/users`;
const loginURL = `${baseURL}/login`;

const Authentication = () => {
  const { view } = useParams();

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

 /*  if (view == 1) setIsLoggedIn(false);
  if (view == 2) setIsSignedUp(false); */


  const handleSignup = async (event) => {
    event.preventDefault();

    //POST request to signupURL with user entered data
    try {
      await axios.post(signupURL, {
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        username: event.target.username.value,
        email: event.target.email.value,
        password_hash: event.target.password_hash.value,
      });
      setIsSignedUp(true);
    } catch (error) {
      setErrorMessage(
        `${error.message}: Something went wrong. Please try again.`
      );
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    //POST to loginURL with username and password
    try {
      const response = await axios.post(loginURL, {
        username: event.target.username.value,
        password_hash: event.target.password.value,
      });
      sessionStorage.setItem("JWTtoken", response.data.token);
      setIsLoggedIn(true);
      setIsLoginError(false);
      setErrorMessage("");
    } catch (error) {
      setIsLoginError(true);
      setErrorMessage(
        `${error.response.data.error.message}. Problem with login.`
      );
    }
  };

  const renderSignUp = () => (
    <div>
      <h1>Create an account</h1>
      <form className="form__container--signup" onSubmit={handleSignup}>
        <div className="form__input">
          Username: <input type="text" name="username" />
        </div>
        <div className="form__input">
          First Name: <input type="text" name="first_name" />
        </div>
        <div className="form__input">
          Last Name: <input type="text" name="last_name" />
        </div>
        <div className="form__input">
          Email: <input type="email" name="email" />
        </div>
        <div className="form__input">
          Password: <input type="password" name="password" />
        </div>
        <button type="submit" className="form__button">
          Register
        </button>
        <button type="cancel" className="form__cancel">
          X
        </button>
      </form>
    </div>
  );

  const renderLogin = () => (
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
  );

  console.log(isSignedUp);
  console.log(isLoggedIn);

  if (!isSignedUp) return renderSignUp();
  if (!isLoggedIn) return renderLogin();
 


  return (
    <>
      <div>
        <Homepage />
      </div>
    </>
  );
};

export default Authentication;
