import env from '@/env';
import { WeatherData } from '@/types/types';
import axios from 'axios';
const GetWeather = async (
  lat: number | null,
  lon: number | null
): Promise<WeatherData | null> => {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat: lat,
          lon: lon,
          appid: env.weather_api_key,
        },
      }
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export default GetWeather;
