import { useEffect, useState } from 'react';
import axios from 'axios';
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
        } else {
          const response = await axios.get('https://api.ipify.org?format=json');
          const { ip } = response.data;

          const geo_response = await axios.post(
            'https://location-api-point.vercel.app/api/ip-info',
            { ip },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          const { country_name, country_code, latitude, longitude } =
            geo_response.data;

          AuthStore.setState((state) => ({
            ...state,
            country: country_name,
            country_code,
            latitude,
            longitude,
            isLocation: true,
          }));

          setCoords({ country: country_name, country_code });
        }
      } catch (error) {
        setCoords({ country: null, country_code: null });
      }
    };

    fetchCoordinates();
  }, []);

  return coords;
};

export default useCoordinates;
export type { Coords };
