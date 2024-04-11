import { useEffect, useState } from "react";
import axios from "axios";
import Homepage from "../src/pages/Homepage/Homepage";
import { Routes, Route, useParams } from "react-router-dom";

const baseURL = "http://localhost:8080";
const signupURL = `${baseURL}/signup`;
const loginURL = `${baseURL}/login`;

const Authentication = () => {
  const { view } = useParams();

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* useEffect(() => {
    console.log(view);
    if (view == 1) {
        console.log("login", view);

      setIsLoggedIn(true);
    } else if (view == 2) {
        console.log(" sign up", view);

      setIsSignedUp(true);
    }
  }, []); */

  const handleSignup = async (event) => {
    event.preventDefault();

    //POST request to signupURL with user entered data
    try {
      await axios.post(signupURL, {
        username: event.target.username.value,
        name: event.target.name.value,
        password: event.target.password.value,
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
        password: event.target.password.value,
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
          Name: <input type="text" name="name" />
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
