import { useEffect, useState } from 'react';
import axios from 'axios';
import env from '../env';
import { AuthStore } from '@/store/auth';

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
        const response = await axios.get(`https://api.ipify.org?format=json`);
        const { ip } = response.data;
        const geo_response = await axios.get(`https://api.ipify.org`, {
          params: {
            key: env.location_api_key,
            ip: ip,
            format: 'json',
          },
        });

        const newCountry = geo_response.data.country_name;
        const newCountryCode = geo_response.data.country_code;
        const latitude = geo_response.data.latitude;
        const longitude = geo_response.data.longitude;

        AuthStore.setState((state) => ({
          ...state,
          country: newCountry,
          country_code: newCountryCode,
          latitude,
          longitude,
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
