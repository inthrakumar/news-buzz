import { AuthStore } from '../store/auth';
import env from '@/env';
import { WeatherData } from '@/types/types';
import axios from 'axios';
const GetWeather = async (): Promise<WeatherData | null> => {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat: AuthStore((state) => state.latitude),
          lon: AuthStore((state) => state.longitude),
          api: env.weather_api_key,
        },
      }
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export default GetWeather;
