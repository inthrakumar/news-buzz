import { useEffect, useState } from 'react';
import axios from 'axios';
import env from '../env';
import { AuthStore } from '@/store/auth';

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
};

type Coords = {
  country?: string | null;
  country_code?: string | null;
};

const useCoordinates = (): Coords => {
  const [coords, setCoords] = useState<Coords>({
    country: null,
    country_code: null,
  });

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const { isLocation, country, country_code } = AuthStore.getState();

        if (isLocation) {
          setCoords({ country, country_code });
          return;
        }

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

        const newCountry = response.data.features[0].properties.country;
        const newCountryCode =
          response.data.features[0].properties.country_code;

        AuthStore.setState((state) => ({
          ...state,
          country: newCountry,
          country_code: newCountryCode,
          isLocation: true,
        }));

        setCoords({ country: newCountry, country_code: newCountryCode });
      } catch (error) {
        console.error('Error getting geolocation:', error);
        setCoords({ country: null, country_code: null });
      }
    };

    fetchCoordinates();
  }, []);

  return coords;
};

export default useCoordinates;
export type { Coords };
