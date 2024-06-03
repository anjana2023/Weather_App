
import axios from 'axios';
import { WeatherRequest, WeatherResponse } from '../models/weather';

export interface IWeatherService {
  getWeather(request: WeatherRequest): Promise<WeatherResponse>;
}

export class WeatherService implements IWeatherService {
  private apiKey: string = process.env.REACT_APP_OPENWEATHER_API_KEY || '';

  
  constructor() {
    console.log('API Key:', this.apiKey); 
  }

  async getWeather(request: WeatherRequest): Promise<WeatherResponse> {
    if (!this.apiKey) {
      throw new Error('API key is missing');
    }

    const response = await axios.get<WeatherResponse>(
      `https://api.openweathermap.org/data/2.5/weather?q=${request.city}&units=metric&appid=${this.apiKey}`
    );
    return response.data;
  }
}
