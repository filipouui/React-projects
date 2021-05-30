import React, { useState, useEffect } from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import axios from "axios";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const [weather, setWeather] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=52.5244&lon=13.4105&exclude=minutely,hourly&appid=${process.env.REACT_APP_WEATHER_API}`
      )
      .then((data) => setWeather(data.data));
  }, []);

  return (
    <div>
      <GlobalStyle />
      {weather && (
        <div className="App">
          <LeftPanel
            temp={weather.current.temp}
            image={weather.current.weather[0].icon}
            weather={weather.current.weather[0].main}
            timezone={weather.timezone}
            setWeather={setWeather}
            longitude={longitude}
            latitude={latitude}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            city={city}
            setCity={setCity}
          />
          <RightPanel weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
