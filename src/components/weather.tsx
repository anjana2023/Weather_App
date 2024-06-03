// src/components/Weather.tsx

import React, { useState } from 'react';
import { useWeatherService } from '../context/weatherContext';
import { WeatherRequest, WeatherResponse } from '../models/weather';

const Weather: React.FC = () => {
  const weatherService = useWeatherService();
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      const request: WeatherRequest = { city };
      const response = await weatherService.getWeather(request);
      setWeather(response);
      setError(null);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp} °C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
