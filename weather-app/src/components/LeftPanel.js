import React from "react";
import { StyledLeftPanel } from "../style/style";
import moment from "moment";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const LeftPanel = ({
  temp,
  image,
  weather,
  timezone,
  setWeather,
  latitude,
  longitude,
  setLongitude,
  setLatitude,
  city,
  setCity,
}) => {
  const picture = `http://openweathermap.org/img/wn/${image}@4x.png`;
  const celsius = Math.floor(temp - 273.15);

  const InputText = (e) => {
    setCity(e.target.value);
  };

  const ClickButton = (e) => {
    e.preventDefault();
    if (city === "") {
      alert("Please enter the city name");
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}`
        )
        .then((data) => {
          setLongitude(data.data.coord.lon);
          setLatitude(data.data.coord.lat);
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_API}`
            )
            .then((data) => {
              setWeather(data.data);
            });
        });
    }
  };

  const Geolocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}6&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_API}`
        )
        .then((data) => {
          setWeather(data.data);
        });
    });
  };

  return (
    <StyledLeftPanel>
      <h1>{timezone}</h1>
      <form className="inputButton">
        <input type="text" onChange={InputText} />
        <button onClick={ClickButton}>Search</button>
      </form>
      <FontAwesomeIcon
        icon={faMapMarkerAlt}
        size="3x"
        className="icon"
        onClick={Geolocation}
      />
      <p>Check your location</p>
      <p>
        <span>
          {latitude}, {longitude}
        </span>
      </p>
      <img src={picture} alt="slika" />
      <h2>{weather}</h2>
      <h4>{celsius} C</h4>
      <p>{moment().format("MMMM Do YYYY")}</p>
    </StyledLeftPanel>
  );
};

export default LeftPanel;
