import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UnauthenticatedHeader from "../../components/Header/UnauthenticatedHeader"

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
              Password: <input type="password" name="password_hash" />
            </div>
            <button type="submit" className="form__button">
              Register
            </button>
            <button type="cancel" className="form__cancel">
              X
            </button>
          </form>
        </div>
      </>
    );
};

export default Signup;
