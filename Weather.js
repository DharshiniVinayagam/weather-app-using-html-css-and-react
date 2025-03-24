import React from "react";
import styles from "./Weather.module.css"; // Import the CSS Module

const Weather = ({ city, temperature }) => {
  return (
    <div className={styles.weatherContainer}>
      <h2 className={styles.city}>{city}</h2>
      <p className={styles.temperature}>{temperature}°C</p>
    </div>
  );
};

export default Weather;