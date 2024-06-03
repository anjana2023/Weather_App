
export interface WeatherRequest {
    city: string;
  }
  
  export interface WeatherResponse {
    name: string;
    weather: {
      description: string;
    }[];
    main: {
      temp: number;
    };
  }
  