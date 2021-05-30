import React from "react";
import { StyledCard } from "../style/style";

const Card = ({ tempMax, image, tempMin, date }) => {
  const picture = `http://openweathermap.org/img/wn/${image}@4x.png`;
  const celsiusMax = Math.floor(tempMax - 273.15);
  const celsiusMin = Math.floor(tempMin - 273.15);

  return (
    <StyledCard>
      <h1>{date}</h1>
      <img src={picture} alt="picture2" />
      <div>
        <h3>
          {celsiusMin} <span>C</span>
        </h3>
        <h3>
          {celsiusMax} <span>C</span>
        </h3>
      </div>
    </StyledCard>
  );
};

export default Card;
