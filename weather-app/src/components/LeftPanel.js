import React, { useState, useEffect } from "react";
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
}) => {
  const [city, setCity] = useState("");
  const [currentLat, setCurrentLat] = useState(null);
  const [currentLon, setCurrentLon] = useState(null);

  const picture = `http://openweathermap.org/img/wn/${image}@4x.png`;
  const celsius = Math.floor(temp - 273.15);

  useEffect(() => {
    Geolocation();
    CityData();
    //eslint-disable-next-line
  }, [city]);

  const InputText = (e) => {
    setCity(e.target.value);
  };

  const CityData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}`
      )
      .then((data) => {
        setLongitude(data.data.coord.lon);
        setLatitude(data.data.coord.lat);
      });
  };

  const ClickButton = (e) => {
    e.preventDefault();
    if (city === "") {
      alert("Please enter the city name");
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_API}`
        )
        .then((data) => {
          setWeather(data.data);
        });
    }
  };

  const Geolocation = (e) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentLat(position.coords.latitude);
      setCurrentLon(position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    FetchGeoData();
  };

  const FetchGeoData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${currentLat}&lon=${currentLon}6&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_API}`
      )
      .then((data) => {
        setWeather(data.data);
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
