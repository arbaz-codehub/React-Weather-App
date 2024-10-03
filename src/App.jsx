import React from "react";
import WeatherApp from "./components/WeatherApp";
// import "./App.css";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <WeatherApp />
    </div>
  );
};

export default App;
