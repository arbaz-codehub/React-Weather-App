import React from "react";
import styles from "./WeatherInfo.module.css";

const WeatherInfo = ({ data, units, handleUnitToggle }) => {
  if (!data) {
    return <div className={styles.location}>Fetching location...</div>;
  }

  const { location, current } = data;
  const temp = units === "C" ? current.temp_c : current.temp_f;

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.location}>{location.name}</div>
      <div className={styles.weatherInfo}>
        <div className={styles.temp}>
          {Math.round(temp)}° {units}
        </div>
        <div className={styles.icon}>
          <img src={current.condition.icon} alt={current.condition.text} />
        </div>
        <div className={styles.condition}>{current.condition.text}</div>
        <div className={styles.humidity}>Humidity: {current.humidity}%</div>
      </div>
      <div className={styles.toggle}>
        <label>
          <input type="checkbox" onChange={handleUnitToggle} />
          Show in Fahrenheit
        </label>
      </div>
    </div>
  );
};

export default WeatherInfo;
