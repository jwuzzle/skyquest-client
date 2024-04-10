import { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = "http://localhost:8080";
const homepageURL = `${baseURL}/home`

const Homepage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({});

    const token = sessionStorage.getItem("JWTtoken");

    useEffect(() => {
        if (!token) {
            return;
        }

        const fetchUserProfile = async () => {
        try {
            const response = await axios.get(homepageURL, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setIsLoading(false);
            setUserInfo( {name: response.data.name} );
        } catch (error) {
            console.error(error);
        }
    };
    fetchUserProfile();
}, [token]);
    


  return (
    <>
    {isLoading ? <h1>Loading...</h1> : 
  <h1>Welcome {userInfo.name}!</h1>}
  <p>Hello</p>
  </>
  )
}

export default Homepage