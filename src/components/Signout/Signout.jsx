import { useNavigate } from "react-router-dom"
import './Signout.scss'

const Signout = () => {

    const navigate = useNavigate();

const onSubmitLogOut = (event) => {
    sessionStorage.removeItem('JWTtoken');
    navigate("/login");
    event.preventDefault()
}

  return (
    <div className="signout">
        <button className="signout__button" to="/" onClick={onSubmitLogOut}>Sign out</button>
    </div>
  )
}

export default Signout