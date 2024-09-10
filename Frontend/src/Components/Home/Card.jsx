import { useState, useEffect, useCallback } from 'react';
import MiddleNews from './MiddleNews';
import OtherNews from './OtherNews';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import "./Card.css";
import { memo } from 'react';
import ErrorMessage from './ErrorMessage'; 

const Card = memo(({ error, setError }) => {
  const [card, setCard] = useState([]);
  const [slide, setSlide] = useState(true);

  useEffect(() => {
    setError(''); 
    axios
      .get(`http://localhost:3000/AcoNews`)
      .then((response) => setCard(response.data.articles))
      .catch((error) => {
        console.error('Error fetching headlines:', error);
        setError('Failed to fetch headlines. Please try again later.');
      });
  }, [setError]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = useCallback(() => {
    setSlide((prev) => !prev);
  }, []);

  const handleNext = useCallback(() => {
    setSlide((prev) => !prev);
  }, []);

  return (
    <>
      <h1 className="card-heading">Top News</h1>

      {error ? (
        <ErrorMessage error={error} />
      ) : (
    <div className="card-news">    
          {slide === true
            ? card.slice(0, 5).map((article, index) => {
                return index === 1 ? (
                  <MiddleNews article={article} index={index} key={index} />
                ) : (
                  <OtherNews article={article} index={index} key={index} />
                );
              })
            : card.slice(5).map((article, index) => {
                return index === 1 ? (
                  <MiddleNews article={article} index={index} key={index} />
                ) : (
                  <OtherNews article={article} index={index} key={index} />
                );
              })}
        </div>
      )}

      {!error && <div className="Arrow-module">
        <p onClick={handlePrev}>
          <IoIosArrowBack />
        </p>
        <p onClick={handleNext}>
          <IoIosArrowForward />
        </p>
      </div>}
    </>
  );
});

export default Card;
