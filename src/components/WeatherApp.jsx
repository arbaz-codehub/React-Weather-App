import React, { useState, useEffect } from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import styles from "./WeatherApp.module.css";

const WeatherApp = () => {
  const apiKey = "1cdb405113484c1eb56161349242209"; // Replace with your WeatherAPI key
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState("C");

  const fetchWeatherData = (query) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch(() => alert("City not found! Please try again."));
  };

  const handleUnitToggle = () => {
    setUnits((prevUnits) => (prevUnits === "C" ? "F" : "C"));
  };

  useEffect(() => {
    // Geolocation-based weather fetching
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const query = `${latitude},${longitude}`;
          fetchWeatherData(query);
        },
        () => {
          alert(
            "Geolocation access denied! Please search for your city manually."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by your browser!");
    }
  }, []);

  return (
    <div className={`${styles.weatherApp} div1`}>
      <Search fetchWeatherData={fetchWeatherData} />
      <WeatherInfo
        data={weatherData}
        units={units}
        handleUnitToggle={handleUnitToggle}
      />
    </div>
  );
};

export default WeatherApp;
