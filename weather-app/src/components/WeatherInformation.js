import React from "react";
import { StyledInfo } from "../style/style";

const WeatherInformation = ({ weather }) => {
  return (
    <StyledInfo>
      <h1>Additional informations</h1>
      <div className="main">
        <div className="flex">
          <div className="container">
            <h4>Pressure</h4>
            <p>{weather.current.pressure}mb</p>
          </div>
          <div className="container">
            <h4>Humidity</h4>
            <p>{weather.current.humidity}%</p>
          </div>
        </div>

        <div className="flex">
          <div className="container">
            <h4>Wind speed</h4>
            <p>{weather.current.wind_speed}m/s</p>
          </div>
          <div className="container">
            <h4>Description</h4>
            <p>{weather.current.weather[0].description}</p>
          </div>
        </div>
      </div>
    </StyledInfo>
  );
};

export default WeatherInformation;
