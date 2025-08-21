
import React, { useState } from "react";
import axios from "axios";
import "./App.css"; 

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city) return;
    try {
      setLoading(true);
    const response = await axios.get(
  `backend-rouge-ten-39.vercel.app${city}`
);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">🌤️ Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="city-input"
      />
      <button onClick={getWeather} className="get-weather-btn">
        Get Weather
      </button>

      {loading && <p className="loading-text">Loading...</p>}

      {weather && (
        <div className="weather-box">
          <h2>{city}</h2>
          <p><strong>Temperature:</strong> {weather.temperature}</p>
          <p><strong>Wind:</strong> {weather.wind}</p>
          <p><strong>Description:</strong> {weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
