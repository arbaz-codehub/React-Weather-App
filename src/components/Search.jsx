import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = ({ fetchWeatherData }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) fetchWeatherData(city);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.cityInput}
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className={styles.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
