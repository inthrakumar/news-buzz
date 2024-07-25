import axios from 'axios';
import env from '../env';

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
};

const useCoordinates = async () => {
  try {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      }
    );

    const response = await axios.get(
      'https://api.geoapify.com/v1/geocode/reverse',
      {
        params: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          apiKey: env.geo_api_key,
        },
      }
    );

    const { country, country_code } = response.data.features[0].properties;

    return { country, country_code };
  } catch (error) {
    console.error('Error getting geolocation:', error);
    return null;
  }
};

export default useCoordinates;
