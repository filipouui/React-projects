import React from "react";
import { StyledRightPanel, Daily } from "../style/style";
import Card from "./Card";
import WeatherInformation from "./WeatherInformation";

const RightPanel = ({ weather }) => {
  return (
    <StyledRightPanel>
      {weather && (
        <Daily>
          {weather.daily.map((data) => (
            <Card
              tempMax={data.temp.max}
              tempMin={data.temp.min}
              image={data.weather[0].icon}
              timeDay={data.dt}
              key={data.dt}
            />
          ))}
        </Daily>
      )}
      {weather && <WeatherInformation weather={weather} />}
    </StyledRightPanel>
  );
};

export default RightPanel;
