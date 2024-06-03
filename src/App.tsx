// src/App.tsx

import React from 'react';
import './App.css';
import Weather from './components/weather';
import { WeatherServiceProvider } from './context/weatherContext';

const App: React.FC = () => {
  return (
    <WeatherServiceProvider>
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
          <Weather />
        </header>
      </div>
    </WeatherServiceProvider>
  );
};

export default App;
