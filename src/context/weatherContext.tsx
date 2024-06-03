import React, { createContext, useContext } from 'react';
import { IWeatherService, WeatherService } from '../services/weatherService';

const WeatherServiceContext = createContext<IWeatherService>(new WeatherService());

export const WeatherServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const weatherService = new WeatherService();
  return (
    <WeatherServiceContext.Provider value={weatherService}>
      {children}
    </WeatherServiceContext.Provider>
  );
};

export const useWeatherService = () => useContext(WeatherServiceContext);