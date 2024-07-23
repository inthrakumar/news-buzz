import { useState } from 'react';

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
};

const useCoordinates = async () => {
  const [coords, setCoords] = useState<GeolocationCoordinates | null>(null);
  try {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      }
    );
    setCoords(position.coords);
  } catch (error) {
    console.error('Error getting geolocation:', error);
  }

  return coords;
};

export default useCoordinates;
