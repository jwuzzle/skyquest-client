import "./SliderCards.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = import.meta.env.VITE_APP_BASE_URL;

const SliderCards = () => {
  const [destinationData, setDestinationData] = useState([]);

  const fetchDestinationData = async () => {
    try {
      const response = await axios.get(`${URL}/destinations`);
      setDestinationData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDestinationData();
  }, []);

  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (index) => {
    setStartIndex(index);
  };

  return (
    <section>
      <h1 className="carousel-header">Top 2024 Destinations</h1>
    <div className="carousel">
      <div className="carousel__group">
      {destinationData
        .slice(startIndex, startIndex + itemsPerPage)
        .map((travel, index) => (
          <div className="carousel__card" key={index}>
              <img
                className="carousel__image"
                src={travel.image}
                alt={travel.location}
              />
            <div className="carousel__content">
            <h2 className="carousel__header">{travel.location}</h2>
            <div className="carousel__description">{travel.description}</div>
          </div>
          </div>
        ))}
        </div>
      <div className="carousel__flex">
        {destinationData.map((travel, index) => (
          <h1 className="carousel__buttons" key={index} onClick={() => handleClick(index)}>
            .
          </h1>
        ))}
      </div>
    </div>
    </section>
  );
};

export default SliderCards;
