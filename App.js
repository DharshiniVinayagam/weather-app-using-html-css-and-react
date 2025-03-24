import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather"; // Adjusted path for better structure

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  
  if (!API_KEY) {
    console.error("API key is missing! Check your .env file.");
  }

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-3xl font-bold mb-6">
        Weather App <span role="img" aria-label="sun and clouds">🌤️</span>
      </h1>

      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded-lg"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Get Weather
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {weather && (
        <Weather city={weather.name} temperature={weather.main.temp} />
      )}
    </div>
  );
};

export default App;

