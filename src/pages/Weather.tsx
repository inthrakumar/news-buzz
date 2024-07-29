import React from 'react';
import GetWeather from '@/hooks/weatherapi';
import { AuthStore } from '../store/auth';
import { useQuery } from 'react-query';

function Weather() {
    const lat = AuthStore(state => state.latitude);
    const lon = AuthStore(state => state.longitude);


    const { isLoading, isError, data } = useQuery(
        ['weather', lat, lon],
        () => GetWeather(lat, lon),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            enabled: lat !== undefined && lon !== undefined
        }
    );
    console.log(data);
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching weather data</div>;

    return (
        <div>
            {data && (
                <div>
                </div>
            )}
        </div>
    );
}

export default Weather;
